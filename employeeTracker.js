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
      message: '',
      choices: [
        'Add',
        'View',
        'Update',
      ]
    })
}

//if then or switch statements for main menu options


