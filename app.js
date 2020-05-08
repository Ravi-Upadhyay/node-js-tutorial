const readline = require('readline');
const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rlInterface.on('close', ()=>{
    console.log('Jackpot!!');
});

let operand1 = Math.floor((Math.random() * 10) + 1);
let operand2 = Math.floor((Math.random() * 10) + 1);
let answer = operand1 + operand2;

rlInterface.question(`What will be sum of ${operand1} and ${operand2}?\n`, (userInput) => {

    const checkAnswer = (input)=>{
        if (input.trim() == answer) {
            rlInterface.close();
        } else {
            rlInterface.setPrompt(`OOPS!!, Try Again\n`);
            rlInterface.prompt();
            rlInterface.on('line', (lineUserInput)=>{
                checkAnswer(lineUserInput);
            });
        }
    }
    checkAnswer(userInput);
});

