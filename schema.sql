DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE  role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);

INSERT INTO department (name) VALUES
('Sales'),
('Developement'),
('Marketing'),
('Production'),
('Contractor');

INSERT INTO role (title, salary, dept_id) VALUES
('Salesman', 65000, 1),
('Engineer', 120000, 2),
('Analyst', 70000, 4),
('Accountant', 60000, 4),
('Marketing Specialist', 85000, 3)
('Sales Representative', 45000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Laura', 'Jones', 2),
('Jim', 'Michaels', 1),
('Darryl', 'Scott', 4),
('Pam', 'Howard', 3),
('Harley', 'Johnson' 2)
('Yogi', 'Smith' 2)

