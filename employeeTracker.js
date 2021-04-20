const { restoreDefaultPrompts } = require('inquirer');
const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: 'We$t2515',
    database: 'employeeTracker_db',
    
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    mainMenu();
  });


// main menu function
const mainMenu = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'Add employee',
        'View employee list',
        'Add department',
        'View departments',
        'Add a role',
        'Update roles',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'Add employee':
          addEmployee();
          break;

        case 'View employee list':
          viewEmployees();
          break;
        
        case 'Add department':
          addDepartment();
          break;

        case 'View departments':
          viewDepartment();
          break;

        case 'Add a role':
          addRole();
          break;

        case 'Update roles':
          //Update function();
          break;
      }
    })
};


const addEmployee = () => {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    var result = res.map(role => ({name: role.title, value: role.id}))
    console.log(result);
  inquirer
    .prompt([
    {
      name: 'first_name',
      type: 'input',
      message: 'Enter employees first name',
    },

    {
    name: 'last_name',
    type: 'input',
    message: 'Enter employees last name',
    },

    {
    name: 'employee_role',
    type: 'list',
    message: 'Select employees role',
    choices: result
    },

    {
      name: 'manager',
      type: 'input',
      message: 'Enter employees manager',
    },
    ]).then(data => {
      connection.query(
        'INSERT INTO employee SET ?',
        {
          first_name: data.first_name,
          last_name: data.last_name,
          role_id: data.employee_role,
          manager_id: data.manager,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} insert complete\n`);
          mainMenu();
        }
      )
    })
  })
};



function viewEmployees() {
  connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;", (err, res) => {
    if (err) throw err;
    console.table(res);
    mainMenu();
})
}



const addDepartment = () => {
  inquirer
    .prompt({
      name:'department_name',
      type: 'input',
      message: 'Enter the name of the department',
    },
    ).then(data => {
      connection.query(
        'INSERT INTO department SET ?',
        {
          name: data.department_name
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} insert complete\n`);
          mainMenu();
        }
      )
    })
}

const viewDepartment = () => {
  connection.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;
      console.table(res);
      mainMenu();
  });
};


const addRole = () => {
  inquirer
    .prompt([{
      name: 'department_id',
      type: 'input',
      message: 'Enter the department id of the new role',
    },

    {
      name: 'title',
      type: 'input',
      message: 'Enter title of role'
    },

    {
      name: 'salary',
      type: 'input',
      message: 'Enter the salary for role',
    },
    ] ).then(data => {
      connection.query(
        'INSERT INTO role SET ?',
        {
          title: data.title,
          salary: data.salary,
          department_id: data.department_id
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} insert complete\n`);
          mainMenu();
        }
      )
    })
};


//update roles