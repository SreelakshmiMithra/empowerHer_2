const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter seconds to countdown: ", (input) => {
    let time = Number(input);

    if (isNaN(time) || time <= 0) {
        console.log("Please enter a valid positive number.");
        rl.close();
        return;
    }

    console.log(`Countdown started for ${time} seconds...`);
    console.log(`Press 's' at any time to stop the countdown.`);

    // Countdown interval
    let timer = setInterval(() => {
        console.log("Remaining:", time, "seconds");
        time--;

        if (time < 0) {
            clearInterval(timer);
            console.log("Countdown Complete!");
            rl.close();
        }
    }, 1000);

    
    setTimeout(() => {
        process.stdin.on("data", (key) => {
            if (key.toString().trim() === "s") {
                clearInterval(timer);
                console.log(" Countdown Stopped by User.");
                rl.close();
            }
        });
    }, 500); 
});
