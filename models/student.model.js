const db = require('../config/db');

const Student = {
    // Get All
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM tbl_student');
        return rows;
    },

    // Get Single
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM tbl_student WHERE id = ?', [id]);
        return rows[0];
    },

    // Create
    create: async (student) => {
        const { firstname, lastname, gender, age, course_id, department_id, status } = student;
        const [result] = await db.query(
            'INSERT INTO tbl_student (firstname, lastname, gender, age, course_id, department_id, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [firstname, lastname, gender, age, course_id, department_id, status]
        );
        return result.insertId;
    },

    // Update Info
    update: async (id, student) => {
        const { firstname, lastname, gender, age, course_id, department_id, status } = student;
        const [result] = await db.query(
            'UPDATE tbl_student SET firstname=?, lastname=?, gender=?, age=?, course_id=?, department_id=?, status=? WHERE id=?',
            [firstname, lastname, gender, age, course_id, department_id, status, id]
        );
        return result.affectedRows;
    },

    // Update Status Only
    updateStatus: async (id, status) => {
        const [result] = await db.query(
            'UPDATE tbl_student SET status=? WHERE id=?',
            [status, id]
        );
        return result.affectedRows;
    },

    // Delete
    delete: async (id) => {
        const [result] = await db.query('DELETE FROM tbl_student WHERE id = ?', [id]);
        return result.affectedRows;
    }
};

module.exports = Student;