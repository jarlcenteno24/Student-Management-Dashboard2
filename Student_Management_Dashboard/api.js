// Fields: Mock Student Database
const mockStudentDb = [
    {
        id: Date.now(),
        firstName: "Leslie",
        lastName: "Andrews",
        email: "leslie.andrews@example.com"
    },
    {
        id: Date.now() + 1,
        firstName: "Emma",
        lastName: "Baumgarten",
        email: "emma.baumgarten@example.com"
    }
];
// Functions:

// Simulates GET request to backend server
function getStudentsAPI() {
    return mockStudentDb;
}

// Simulates POST request to backend server
function addStudentsAPI(newStudentData) {
    const savedStudent = {
        id: Date.now(), // Unique number based on current time
        ...newStudentData // Copies firstName, lastName, email, etc.
    };

    mockStudentDb.push(savedStudent);
    return savedStudent;
}

// Export functions to make them accessible outside this module
export {
    getStudentsAPI,
    addStudentsAPI
};

/* // Test output matching Test Case 1
console.log("Initial DB State:", getStudentsAPI());

// Test Case 2: Create a new student and display the returned saved object
const newStudent = addStudentsAPI({
    firstName: "Light",
    lastName: "Yagami",
    email: "light.yagami@example.com"
});

console.log("Returned Saved Object:", newStudent);

// Test Case 3: Display the updated database
console.log("Updated DB State:", getStudentsAPI()); */