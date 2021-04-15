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
          //Add function();
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
          //Add function();
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
    })
}

//if then or switch statements for main menu options


