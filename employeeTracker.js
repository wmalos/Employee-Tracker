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


// what are we doing?
// main menu function
const mainMenu = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'rawlist',
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
          //View function();
          break;
        
        case 'Add department':
          //Add function();
          break;

        case 'View departments':
          //View function();
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
  inquirer
    .prompt({
      name: 'employee_id',
      type: 'input',
      message: 'Enter employee id number',
    },
    
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
    type: 'input',
    message: 'Enter employees role',
    },

    {
      name: 'manager',
      type: 'input',
      message: 'Enter employees manager',
    },
    );
};

//if then or switch statements for main menu options




const addRole = () => {
  inquirer
    .prompt({
      name: 'role_id',
      type: 'input',
      message: 'Enter the id of the new role',
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
    );
};