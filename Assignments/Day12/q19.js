
let age = 20;

// Function in Global Execution Context
function displayAge() {
    console.log("Age in displayAge:", age);
}

// Function inside a Function Context that updates global variable
function changeAge() {
    age = 25;  
    console.log("Age updated inside changeAge:", age);
}

// Calling the functions
displayAge();   
changeAge();    
displayAge();   
