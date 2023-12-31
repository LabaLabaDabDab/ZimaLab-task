create schema schema_name;

CREATE TABLE accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    position VARCHAR(255),
    phone1 VARCHAR(20),
    phone2 VARCHAR(20),
    phone3 VARCHAR(20)
);

INSERT INTO accounts (first_name, last_name, email, company_name, position, phone1, phone2, phone3)
VALUES
    ('John', 'Doe', 'john.doe@example.com', 'Company A', 'Manager', '1234567890', '9876543210', '5555555555'),
    ('Jane', 'Smith', 'jane.smith@example.com', 'Company B', 'Director', '1112223333', '4445556666', '7778889999'),
    ('Michael', 'Johnson', 'michael.johnson@example.com', 'Company C', 'Employee', '8887776666', '5554443333', '2221110000'),
    ('Emily', 'Williams', 'emily.williams@example.com', 'Company D', 'Manager', '5551234567', '7894561230', '3216549870'),
    ('David', 'Brown', 'david.brown@example.com', 'Company E', 'Analyst', '7778889999', '4445556666', '1112223333'),
    ('Olivia', 'Miller', 'olivia.miller@example.com', 'Company F', 'Designer', '9876543210', '1234567890', '5555555555'),
    ('James', 'Wilson', 'james.wilson@example.com', 'Company G', 'Developer', '5554443333', '2221110000', '8887776666'),
    ('Sophia', 'Johnson', 'sophia.johnson@example.com', 'Company H', 'Manager', '7894561230', '5551234567', '3216549870'),
    ('William', 'Smith', 'william.smith@example.com', 'Company I', 'Consultant', '1112223333', '4445556666', '7778889999'),
    ('Emma', 'Davis', 'emma.davis@example.com', 'Company J', 'Assistant', '9876543210', '1234567890', '5555555555'),
    ('Liam', 'Taylor', 'liam.taylor@example.com', 'Company K', 'Engineer', '5554443333', '2221110000', '8887776666'),
    ('Ava', 'Martin', 'ava.martin@example.com', 'Company L', 'Designer', '5551234567', '7894561230', '3216549870'),
    ('Noah', 'Anderson', 'noah.anderson@example.com', 'Company M', 'Manager', '1112223333', '4445556666', '7778889999'),
    ('Isabella', 'Harris', 'isabella.harris@example.com', 'Company N', 'Analyst', '9876543210', '1234567890', '5555555555'),
    ('Sophia', 'Moore', 'sophia.moore@example.com', 'Company O', 'Employee', '5554443333', '2221110000', '8887776666'),
    ('Mia', 'Clark', 'mia.clark@example.com', 'Company P', 'Director', '5551234567', '7894561230', '3216549870'),
    ('Charlotte', 'Young', 'charlotte.young@example.com', 'Company Q', 'Manager', '9876543210', '1234567890', '5555555555'),
    ('Ethan', 'Lewis', 'ethan.lewis@example.com', 'Company R', 'Consultant', '1112223333', '4445556666', '7778889999'),
    ('Amelia', 'Walker', 'amelia.walker@example.com', 'Company S', 'Designer', '5554443333', '2221110000', '8887776666'),
    ('Liam', 'White', 'liam.white@example.com', 'Company T', 'Engineer', '5551234567', '7894561230', '3216549870'),
    ('Oliver', 'Smith', 'oliver.smith@example.com', 'Company U', 'Assistant', '9876543210', '1234567890', '5555555555'),
    ('Ava', 'Turner', 'ava.turner@example.com', 'Company V', 'Manager', '5554443333', '2221110000', '8887776666'),
    ('Isabella', 'Scott', 'isabella.scott@example.com', 'Company W', 'Analyst', '5551234567', '7894561230', '3216549870'),
    ('Mia', 'King', 'mia.king@example.com', 'Company X', 'Employee', '1112223333', '4445556666', '7778889999'),
    ('Sophia', 'Wright', 'sophia.wright@example.com', 'Company Y', 'Director', '9876543210', '1234567890', '5555555555'),
    ('Jackson', 'Green', 'jackson.green@example.com', 'Company Z', 'Manager', '5554443333', '2221110000', '8887776666'),
    ('Olivia', 'Adams', 'olivia.adams@example.com', 'Company A1', 'Designer', '5551234567', '7894561230', '3216549870'),
    ('Liam', 'Hall', 'liam.hall@example.com', 'Company B1', 'Engineer', '9876543210', '1234567890', '5555555555'),
    ('Emma', 'Brooks', 'emma.brooks@example.com', 'Company C1', 'Assistant', '5554443333', '2221110000', '8887776666'),
    ('Ava', 'Allen', 'ava.allen@example.com', 'Company D1', 'Manager', '5551234567', '7894561230', '3216549870'),
    ('Oliver', 'Baker', 'oliver.baker@example.com', 'Company E1', 'Consultant', '9876543210', '1234567890', '5555555555'),
    ('Sophia', 'Coleman', 'sophia.coleman@example.com', 'Company F1', 'Designer', '5554443333', '2221110000', '8887776666'),
    ('Liam', 'Cooper', 'liam.cooper@example.com', 'Company G1', 'Engineer', '5551234567', '7894561230', '3216549870'),
    ('Emma', 'Cox', 'emma.cox@example.com', 'Company H1', 'Assistant', '9876543210', '1234567890', '5555555555'),
    ('Ava', 'Cruz', 'ava.cruz@example.com', 'Company I1', 'Manager', '5554443333', '2221110000', '8887776666'),
    ('Oliver', 'Diaz', 'oliver.diaz@example.com', 'Company J1', 'Analyst', '5551234567', '7894561230', '3216549870');
