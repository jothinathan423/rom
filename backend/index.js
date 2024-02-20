const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Jothi422@',
    database: 'setaf'
});

app.post('/create', (req, res) => {
    const {
        academicyear,
        semester,
        facultyname,
        year,
        session,
        coursename,
        scoreobtained,
        certificatetype,
        certificatepdf
    } = req.body;

    const query = `
        INSERT INTO nptel_certification (academic_Year, semester, faculty_Name, years, sessions, course_name, score_obtained, certificate_Type, certificate_pdf)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    pool.query(query, [academicyear, semester, facultyname, year, session, coursename, scoreobtained, certificatetype, certificatepdf], (err, results) => {
        if (err) {
            console.error('Error creating certificate:', err);
            res.status(500).send('Error creating certificate');
            return;
        }
        console.log('Certificate created successfully');
        res.status(200).send('Certificate created successfully');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
