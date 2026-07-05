// 1. Deposit Money in the slot machine
// 2. Determine the number of lines to bet on
// 3. How much the user is betting on slot machine. Collect bet money.
// 4. Spin the slot machine.

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT = {
    "A" : 2,
    "B" : 4,
    "C" : 6,
    "D" : 8
}

const SYMBOL_VALUES = {
    "A" : 5,
    "B" : 4,
    "C" : 3,
    "D" : 2
}

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

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for (let i = 0; i < count; i++){
            symbols.push(symbol)
        }
    }
        const reels = [[], [], []]
        for (let i=0; i < COLS; i++){
            for(let j = 0; j< ROWS; j++){
                
            }
        }
};
spin();
const numberOfLines = getNumberOfLines();
let balance = deposit();
const bet = getBet(balance, numberOfLines);
