INSERT INTO department (name)
VALUES 
('Finance & Accounting'),
('Sales & Marketing'),
('Operations'),
('Information Technology');

INSERT INTO role (title, salary, department_id)
VALUES
('Project Manager', 150000, 4),
('Operations Manager', 95000, 4),
('Full Stack Developer', 65000, 1),
('Software Engineer', 90000, 1),
('Accountant', 12000, 2), 
('Finanical Analyst', 120000, 2),
('Marketing Coordindator', 62000, 3), 
('Sales Lead', 80000, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Shawn', 'Spencer', 2, null),
('Rollett', 'Collins', 1, 1),
('Aster', 'Warren', 4, null),
('Nyn', 'Ivy', 3, 3),
('Benjamin', 'Stone', 6, null),
('Archibald', 'Sanchez', 5, 5),
('Lewis', 'Allen', 7, null),
('Katherine', 'Green', 8, 7);
