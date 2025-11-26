//  Define the timer function
function timer(duration, onComplete) {
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}

// Call the timer function
timer(2000, (message) => {
    console.log(message);
});
