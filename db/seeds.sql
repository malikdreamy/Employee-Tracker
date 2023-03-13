INSERT INTO department(department_name)
VALUES('Shoes'),
('Womens Clothes'),
('Mens Clothes'),
('Jewelry'),
('Handbags'),
('Maintenance');

INSERT INTO employee_role(title, salary, department)
VALUES('sales lead', 60000, 1),
('visual merchandising', 55000, 2),
('manager', 75000, 3),
('maintenance', 50000, 6);

INSERT INTO employee(first_name, last_name, title, department_name)
VALUES('Mary', 'Jenkins', 'sales lead', 'Shoes'),
      ('Jennifer', 'Zenga', 'manager', 'Handbags'),
      ('Bryan', 'Jacobs', 'maintenance', 'Jewelry'),
      ('Donald', 'Bloomfield', 'visual merchandising', 'Mens Clothes');
