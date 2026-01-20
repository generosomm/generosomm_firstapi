const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/student.routes'); // Import Routes

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);

module.exports = app;