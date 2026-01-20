const Student = require('../models/student.model'); // Import the Model

// Get All
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.getAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Single
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.getById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create
exports.createStudent = async (req, res) => {
    try {
        const newId = await Student.create(req.body);
        res.status(201).json({ id: newId, message: 'Student added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update
exports.updateStudent = async (req, res) => {
    try {
        const affectedRows = await Student.update(req.params.id, req.body);
        if (affectedRows === 0) return res.status(404).json({ message: 'Student not found' });
        res.json({ message: 'Student updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Status
exports.updateStudentStatus = async (req, res) => {
    try {
        const affectedRows = await Student.updateStatus(req.params.id, req.body.status);
        if (affectedRows === 0) return res.status(404).json({ message: 'Student not found' });
        res.json({ message: 'Status updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete
exports.deleteStudent = async (req, res) => {
    try {
        const affectedRows = await Student.delete(req.params.id);
        if (affectedRows === 0) return res.status(404).json({ message: 'Student not found' });
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};