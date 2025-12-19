const express = require('express');
const cors = require('cors');
const path = require('path');
const solutionRoutes = require('./routes/solutions');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', solutionRoutes);

app.use('/api/*', (req, res) => {
    res.status(404).json({ success: false, message: 'API Endpoint Not Found' });
});

app.use('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
