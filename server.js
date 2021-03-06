const mysql = require('mysql12');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.mysql_psswrd,
    database: 'employee_id'
});

connection.connect(err => {
    if (err) throw err;
        console.log('connected ad id ' + connection.threadId);
        afterConnection();
})

afterConnection = () => {
    console.log('Connected...');
    promptUser();
};

const promptUser = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'options',
            message: 'Select an action.',
            options: [
                'View all departments', 
                'View all roles', 
                'View all employees', 
                'Add a department', 
                'Add a role', 
                'Add an employee', 
                'Update an employee role',
                'Update an employee manager',
                "View employees by department",
                'Delete a department',
                'Delete a role',
                'Delete an employee',
                'View department budgets',
                'No Action'
            ]
        }
    ])
    .then((answers) => {
        const { choices } = answers;

        if (choices === "View all departments") {
            showDepartments();
        }

        if (choices === "View all roles") {
            showRoles();
        }

        if (choices === "View all employees") {
            showEmployees();
        }

        if (choices === "Add a department") {
            addDepartment();
        }

        if (choices === "Add a role") {
            addRole();
        }

        if (choices === "Add an employee") {
            addEmployee();
        }

        if (choices === "Update an employee role") {
            updateEmployee();
        }

        if (choices === "Update an employee manager") {
            updateManager();
        }

        if (choices === "View employees by department") {
            employeeDepartment();
        }

        if (choices === "Delete a department") {
            deleteDepartment();
        }

        if (choices === "Delete a role") {
            deleteRole();
        }

        if (choices === "Delete an employee") {
            deleteEmployee();
        }

        if (choices === "View department budgets") {
            viewBudget();
        }

        if (choices === "No Action") {
            connection.end()
        };
    })
}

showDepartments = () => {
    console.log();
}