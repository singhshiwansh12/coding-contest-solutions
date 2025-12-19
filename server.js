require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/contest_solutions_db';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log(`✅ Connected to MongoDB`);
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('❌ Database connection error:', err);
        process.exit(1);
    });
