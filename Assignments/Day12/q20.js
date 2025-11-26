//1
function createCounter() {
    let count = 0;   // private variable

    function increment() {
        count++;
        console.log("Current count:", count);
    }

    function decrement() {
        count--;
        console.log("Current count:", count);
    }

    return {
        increment,
        decrement
    };
}

// Example Usage:
const counter = createCounter();
counter.increment(); 
counter.increment();
counter.decrement();

//2
// Task 1: Implementing createBankAccount using Closures
function createBankAccount() {
    let balance = 0;                
    let transactionHistory = [];     // private transaction history

    function deposit(amount) {
        balance += amount;
        transactionHistory.push(`Deposited: ${amount}`);
        console.log(`Deposited: ${amount}`);
    }

    function withdraw(amount) {
        if (amount > balance) {
            console.log("Insufficient balance");
            transactionHistory.push(`Failed Withdrawal: ${amount}`);
        } else {
            balance -= amount;
            transactionHistory.push(`Withdrawn: ${amount}`);
            console.log(`Withdrawn: ${amount}`);
        }
    }

    function checkBalance() {
        console.log(`Current balance: ${balance}`);
        return balance;
    }

    function getHistory() {
        return transactionHistory;
    }

    return {
        deposit,
        withdraw,
        checkBalance,
        getHistory
    };
}

// Example usage
const account = createBankAccount();
account.deposit(500);      
account.withdraw(200);     
account.withdraw(400);     

console.log(account.balance); 
console.log(account.getHistory()); 

