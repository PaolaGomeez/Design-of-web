var students = [];

function Student(name, email, dob, grade) {
    this.id = generateRandomId();
    this.name = name;
    this.email = email;
    this.dob = dob;
    this.grade = grade;
}

const nameVal = document.getElementById("name");
const emailVal = document.getElementById("email");
const dobVal = document.getElementById("dob");
const gradeVal = document.getElementById("grade");

function register() {
    let newStudent = new Student(nameVal.value, emailVal.value, dobVal.value, gradeVal.value);
    save(newStudent);
    students.push(newStudent);
    display(newStudent);
    document.getElementById("registrationForm").reset();
}

function generateRandomId() {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

function display(student) {
    let table = document.getElementById("studentTable");
    let row = document.createElement('tr');
    row.id = student.id;
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.dob}</td>
        <td>${student.grade}</td>
        <td><button class="btn-danger" onclick="remove('${student.id}')">Remove</button></td>
    `;
    table.appendChild(row);
}

function save(newStudent) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(newStudent);
    localStorage.setItem("students", JSON.stringify(students));
    alert("Registration Successful!");
}

function load() {
    let storedStudents = JSON.parse(localStorage.getItem('students'));
    if (storedStudents) {
        storedStudents.forEach(student => {
            display(student);
        });
    }
}

function remove(studentId) {

    let studentElement = document.getElementById(studentId);
    studentElement.remove();

    let students = JSON.parse(localStorage.getItem('students'));
    students = students.filter(student => student.id !== studentId);
    localStorage.setItem('students', JSON.stringify(students));
}

document.addEventListener("DOMContentLoaded", function(event) {
    load();


    const inputs = [nameVal, emailVal, dobVal, gradeVal];
    inputs.forEach((input, index) => {
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault(); 
                const nextInput = inputs[index + 1];
                if (nextInput) {
                    nextInput.focus(); 
                }
            }
        });
    });
});
