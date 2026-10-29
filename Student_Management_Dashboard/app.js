// Import: Import the functions from api.js
import { getStudentsAPI, addStudentsAPI } from './api.js';

// Fields:
let localStudent = [];

// DOM Selections
const studentForm = document.querySelector('#studentForm');
const studentTableBody = document.querySelector('#studentTableBody');

// Arrow Functions:

// Traverses array collections using .forEach to build table rows
const renderTable = (dataArray) => {
    studentTableBody.innerHTML = '';

    // Check if dataArray has elements. If not, display fallback message
    if (!dataArray || dataArray.length === 0) {
        studentTableBody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center;">No student records found.</td>
            </tr>
        `;
        return;
    }

    dataArray.forEach((student, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>
        `;
        
        studentTableBody.appendChild(row);
    });
};

// Form submit event listener
studentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstNameInput = document.querySelector('#firstName');
    const lastNameInput = document.querySelector('#lastName');
    const emailInput = document.querySelector('#email');

    const studentData = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        email: emailInput.value.trim()
    };

    // Validation check
    if (!studentData.firstName || !studentData.lastName || !studentData.email) {
        alert("Please fill out all input fields!");
        return;
    }

    // The API updates the same array returned by getStudentsAPI.
    addStudentsAPI(studentData);

    // Refresh UI table and clear input fields
    renderTable(localStudent);
    studentForm.reset();
});

// App initialization
const initApp = () => {
    localStudent = getStudentsAPI();
    renderTable(localStudent);
};

// Run application
initApp();