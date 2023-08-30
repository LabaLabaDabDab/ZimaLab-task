const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'accounts',
    port: 3306
});

db.connect();

app.get('/api/accounts', (req, res) => {
    db.query("SELECT * FROM accounts", (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error retrieving accounts');
        } else {
            res.json(results);
        }
    });
});

app.get('/api/accounts/:id', (req, res) => {
    const accountId = req.params.id;
    db.query("SELECT * FROM accounts WHERE id = ?", [accountId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error retrieving account');
        } else {
            res.json(result);
        }
    });
});

app.post('/api/accounts', (req, res) => {
    const newAccount = req.body;
    db.query(
        "INSERT INTO accounts SET ?",
        newAccount,
        (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error creating account');
            } else {
                res.json({ message: 'Account created successfully', id: result.insertId });
            }
        }
    );
});

app.put('/api/accounts/:id', (req, res) => {
    const accountId = req.params.id;
    const updatedAccount = req.body;

    db.query(
        "UPDATE accounts SET first_name = ?, last_name = ?, email = ?, company_name = ?, position = ?, phone1 = ?, phone2 = ?, phone3 = ? WHERE id = ?",
        [updatedAccount.first_name, updatedAccount.last_name, updatedAccount.email, updatedAccount.company_name, updatedAccount.position, updatedAccount.phone1, updatedAccount.phone2, updatedAccount.phone3, accountId],
        (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error updating account');
            } else {
                res.json({ message: 'Account updated successfully' });
            }
        }
    );
});


app.delete('/api/accounts/:id', (req, res) => {
    const accountId = req.params.id;
    db.query("DELETE FROM accounts WHERE id = ?", [accountId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error deleting account');
        } else {
            res.json({ message: 'Account deleted successfully' });
        }
    });
});

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});
