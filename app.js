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

const getNumberOfLines = () => {
    while(true){
        const getLines = prompt ("Enter the Number Of Lines: ")
        const numberOfLines = parseFloat (getLines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid Number of Lines. Please try again.")
        }
        else{
            return numberOfLines;
        }
    }
}

const getBet = (balance, lines) => {
    while(true){
        const getNumberBet = prompt("Enter the Bet amount: ")
        const numberBet = parseFloat(getNumberBet);
        if (isNaN(numberBet) || numberBet <=0 ){
            console.log("Invalid Bet amount. Please try again")
        } 
        else if (numberBet>balance/lines){
            console.log("Maximum balance exceeded")
        }
        else{
            return numberBet;
        }
    }
}

const numberOfLines = getNumberOfLines();
let balance = deposit();
const bet = getBet(balance, numberOfLines);
    