const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const solutionRoutes = require('./routes/solutions');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/contest_solutions';

mongoose.connect(mongoURI)
    .then(() => console.log('✅ MongoDB connected successfully!'))
    .catch(err => console.log('❌ MongoDB connection error:', err));

// Routes
app.use('/api/solutions', solutionRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
