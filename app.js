// 1. Deposit Money in the slot machine
// 2. Determine the number of lines to bet on
// 3. How much the user is betting on slot machine. Collect bet money.

const prompt = require("prompt-sync")();

const deposit = () => {
    while(true){
    const depositAmount = prompt("Enter A Deposit Amount: ")
    const numberDepositAmount = parseFloat(depositAmount);

    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid Deposit Amount. Please Try Again")
    }
    else {
        return numberDepositAmount;
    }
    }
};

deposit();