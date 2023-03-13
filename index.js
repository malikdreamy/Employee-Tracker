require("dotenv").config();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: process.env.MYSQL_KEY,
  database: 'company'
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server');

  // Prompt the user for input
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    },
  ]).then((answers) => {
    if (answers.action === 'View all departments') {
      // SELECT query for all departments
      const query = `SELECT * FROM department`;
      connection.query(query, (err, result) => {
        if (err) throw err;
        console.table(result);
        connection.end();
      });
    } else if (answers.action === 'View all roles') {
      // SELECT query for all roles
      const query = `SELECT * FROM employee_role`;
      connection.query(query, (err, result) => {
        if (err) throw err;
        console.table(result);
        connection.end();
      });
    } else if (answers.action === 'View all employees') {
      // SELECT query for all employees
      const query = `SELECT * FROM employee`;
      connection.query(query, (err, result) => {
        if (err) throw err;
        console.table(result);
        connection.end();
      });
    } else if (answers.action === 'Add a department') {
      inquirer.prompt([
        {
          type: 'input',
          name: 'department_name',
          message: 'Enter the name of the department:',
        },
      ]).then((answers) => {
        // INSERT query for department table
        const query = `INSERT INTO department (name) VALUES (?)`;
        connection.query(query, [answers.department_name], (err, result) => {
          if (err) throw err;
          console.log(`Added ${result.affectedRows} row(s)`);
          connection.end();
        });
      });
    } else if (answers.action === 'Add a role') {
      inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Enter the title of the employee role:',
        },
        {
          type: 'input',
          name: 'salary',
          message: 'Enter the salary of the employee role:',
        },
        {
          type: 'input',
          name: 'department_id',
          message: 'Enter the department ID of the employee role:',
        },
      ]).then((answers) => {
        const query = 'INSERT INTO employee_role (title, salary, department_id) VALUES (?, ?, ?)';
        connection.query(query, [answers.title, answers.salary, answers.department_id], (err, result) => {
        if (err) throw err;
        console.log(`Added ${result.affectedRows} row(s)`);
        connection.end();
        });
        });
        } else if (answers.action === 'Add an employee') {
        inquirer.prompt([
        {
        type: 'input',
        name: 'first_name',
        message: 'Enter the first name of the employee:',
        },
        {
        type: 'input',
        name: 'last_name',
        message: 'Enter the last name of the employee:',
        },
        {
        type: 'input',
        name: 'title',
        message: 'Enter the role of the employee:',
        },
        {
        type: 'input',
        name: 'department_name',
        message: 'Enter the department of the employee:',
        default: null,
        },
        ]).then((answers) => {
        // INSERT query for employee table
        const query = 'INSERT INTO employee (first_name, last_name, title, department_name) VALUES (?, ?, ?, ?)';
        connection.query(query, [answers.first_name, answers.last_name, answers.title, answers.department_name], (err, result) => {
        if (err) throw err;
        console.log(`Added ${result.affectedRows} row(s)`);
        connection.end();
        });
        });
       } else if (answers.action === 'Update an employee role') {
          inquirer.prompt([
            {
              type: 'input',
              name: 'employee_id',
              message: 'Enter the ID of the employee you want to update:',
            },
            {
              type: 'input',
              name: 'title',
              message: 'Enter the new title of the employee:',
            },
            {
              type: 'input',
              name: 'department_name',
              message: 'Enter the Department The Employee is working now',
            },
          ]).then((answers) => {
            // UPDATE query for employee table
            const query = 'UPDATE employee SET title = ?, department_name = ? WHERE id = ?';
            connection.query(query, [answers.title, answers.department_name, answers.employee_id], (err, result) => {
              if (err) throw err;
              console.log(`Updated ${result.affectedRows} row(s)`);
              connection.end();
            });
          })

          }
      })
    })
    
  
        
        
          
          
          
          
          

