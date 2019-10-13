let readlineSync = require('readline-sync');
let questions = require('./questions.js');
let f = require('./functions.js');

f.clear();

let userName = readlineSync.question('Hi. Who am I communicating with? ');

f.print(`Hi ${userName}. I am the HAL-11000 interstellar vacation planner.\n\n`)
f.print(`${userName}, I am going to ask you a set of questions.\n\n`);
f.print(`If you get a perfect score, the trip will be to outer space.\nIf you get a score of zero your vacation will be in Dade County.\nFor any other score we will plan a trip here on Earth.\n\n`)

input = readlineSync.question('Ready to begin: yes or no: ');

if (input === 'no') {
    f.print("That's to bad. If you need assitance don't hesitate to call. Bye.")
    process.exit()
}

f.clear();
f.programPause('Retrieving data from the database located in Mars!\nPlease wait');
f.print('Ok data have been received. Converting martian object notation to earth object notation. Also known as JSON.\nAlmost done!')

f.clear()

questions = f.shuffleQuestions(questions);

let asked = []

console.log(f.askingQuestion(questions, 0))



