DROP DATABASE IF EXISTS company;
CREATE DATABASE company;
USE company;

CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE employee_role (
  title VARCHAR(30) PRIMARY KEY NOT NULL,
  salary INT,
  department INT,
  FOREIGN KEY (department) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  title VARCHAR(30),
  department_name VARCHAR(30),
  FOREIGN KEY (title) REFERENCES employee_role(title)
);
