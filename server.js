const express = require("express");

const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Siva",
        department: "CSE"
    }
];

// GET
app.get("/students", (req, res) => {
    res.json(students);
});

// POST
app.post("/students", (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        department: req.body.department
    };

    students.push(newStudent);

    res.json(newStudent);
});

// DELETE
app.delete("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    students = students.filter(student => student.id !== id);

    res.json({
        message: "Deleted successfully"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});