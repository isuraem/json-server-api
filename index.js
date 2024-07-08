const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Set up the json-server router
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// Use json-server middleware
app.use('/api', router);

// Example custom route
app.get('/hello', (req, res) => {
    res.send('Hello from the custom Node.js backend!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
