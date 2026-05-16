const API_URL = "http://localhost:3000/students";

window.onload = fetchStudents;

async function fetchStudents() {
    const response = await fetch(API_URL);

    const students = await response.json();

    console.log(students);
}