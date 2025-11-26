//  displayMessage function
function displayMessage(name) {
    console.log(`Hello, ${name}!`);
}

//  getUserInput function
function getUserInput(callback) {
    setTimeout(() => {
        const username = "Alice";   
        callback(username);         
    }, 1000);
}

// Calling the function
getUserInput(displayMessage);
