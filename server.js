const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Configure the MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
});

// Connect to the database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Enable cross-origin resource sharing
app.use(cors());

// Parse HTTP request bodies as JSON
app.use(bodyParser.json());

// Handle registration form submissions
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Insert the new user into the database
    connection.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err, results) => {
        if (err) {
            console.error('Error inserting new user into database:', err);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }

        console.log('New user registered:', { username, email });
        res.json({ message: 'Registration successful' });
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});
