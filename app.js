// Game Flow
// 1. Ask the player to deposit money.
// 2. Continue playing while the player has a positive balance.
// 3. Ask how many lines (1-3) the player wants to bet on.
// 4. Ask for the bet amount per line.
// 5. Validate that the total bet does not exceed the player's balance.
// 6.Print the slot machine.
// 7. Calculate winnings using the symbol payout values.
// 8. Update the player's balance.
// 9. Check each selected betting line for matching symbols.
// 10.  Ask if the player wants to play another round.
// 11. Repeat until the player quits or runs out of money.

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8,
};

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
};

const deposit = () => {
    while (true) {
        const amount = parseFloat(prompt("Enter deposit amount: "));

        if (isNaN(amount) || amount <= 0) {
            console.log("Please enter a valid amount.");
            continue;
        }

        return amount;
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = parseInt(prompt("Enter number of lines (1-3): "));

        if (isNaN(lines) || lines < 1 || lines > ROWS) {
            console.log("Invalid number of lines.");
            continue;
        }

        return lines;
    }
};

const getBet = (balance, lines) => {
    while (true) {
        const bet = parseFloat(prompt("Bet per line: "));

        if (isNaN(bet) || bet <= 0) {
            console.log("Invalid bet.");
            continue;
        }

        if (bet * lines > balance) {
            console.log("You don't have enough balance.");
            continue;
        }

        return bet;
    }
};

const spin = () => {
    const symbols = [];

    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];

    for (let i = 0; i < COLS; i++) {
        reels.push([]);

        const reelSymbols = [...symbols];

        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];

            reels[i].push(selectedSymbol);

            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
};

const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);

        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }

    return rows;
};

const printRows = (rows) => {
    console.log();

    for (const row of rows) {
        console.log(row.join(" | "));
    }

    console.log();
};

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        const firstSymbol = symbols[0];

        let allMatch = true;

        for (const symbol of symbols) {
            if (symbol !== firstSymbol) {
                allMatch = false;
                break;
            }
        }

        if (allMatch) {
            winnings += bet * SYMBOL_VALUES[firstSymbol];
        }
    }

    return winnings;
};

const game = () => {
    let balance = deposit();

    while (balance > 0) {
        console.log(`\nCurrent Balance: $${balance}`);

        const lines = getNumberOfLines();
        const bet = getBet(balance, lines);

        const totalBet = bet * lines;

        balance -= totalBet;

        console.log(`\nBetting $${bet} on ${lines} lines.`);
        console.log(`Total Bet: $${totalBet}`);

        const reels = spin();
        const rows = transpose(reels);

        printRows(rows);

        const winnings = getWinnings(rows, bet, lines);

        console.log(`You won $${winnings}`);

        balance += winnings;

        console.log(`Balance: $${balance}`);

        if (balance <= 0) {
            console.log("You're out of money!");
            break;
        }

        const again = prompt("\nPlay again? (y/n): ").toLowerCase();

        if (again !== "y") {
            break;
        }
    }

    console.log(`\nYou leave with $${balance}`);
};

game();
