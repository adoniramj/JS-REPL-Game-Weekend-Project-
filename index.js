let readlineSync = require('readline-sync');
let questions = require('./questions.js');
let f = require('./functions.js');

f.clear();

let score;
let input;
/*
let userName = readlineSync.question('Hi. Who am I communicating with? ');

f.print(`Hi ${userName}. I am the HAL-11000 interstellar vacation planner.\n\n`)
f.print(`${userName}, I am going to ask you a set of questions.\n\n`);
f.print(`If you get a perfect score, the trip will be to outer space.\nIf you get a score of zero your vacation will be in Dade County.\nFor any other score we will plan a trip here on Earth.\n\n`)
*/
/*
input = readlineSync.question('Ready to begin: yes or no: ');

if (input === 'no') {
    f.print("That's to bad. If you need assitance don't hesitate to call. Bye.")
    process.exit()
}
*/
/*
f.programPause('Retrieving data from the database located in Mars!\nPlease wait');
f.print('Ok data have been received. Converting lunar object notation to earth object notation. Also known as JSON')
f.programPause('Almost done!');
f.clear()
*/
let asked = []
function askingQuestion(num) {
    f.print('Please answer the following question.')
    console.log(questions[num].question)
    Object.keys(questions[num].options).forEach((key) => {
        console.log(key, questions[num].options[key])

    })
    let answer = readlineSync.question(`What is your answer? `)
    return [questions[num].num, questions[num].answer, answer]
}



// f.print('Please answer the following question.')
// query();
// f.askQuestion()
ans = askingQuestion(1)
// asked.push(query(0))
// asked.askQuestion(query(0));
// asked.askQuestion(query(2));
// asked.push(query(1));
/*
let answer = readlineSync.question(`What is your answer? `)
console.log(answer)
*/
// console.log(arr)
// console.log(questions.length)

console.log(ans)


