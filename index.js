let readlineSync = require('readline-sync');
let questions = require('./questions.js');

let f = require('./functions.js');

let correctNumber = 0;
f.clear();

let userName = readlineSync.question('Hi. Who am I communicating with? ');

f.print(`Hi ${userName}. I am the HAL-11000 interstellar vacation planner.\n\n`)

f.print(`${userName}, I am going to ask you a set of questions.\n\n`);
f.print(`If you get a perfect score, the trip will be to outer space.\nIf you get a score of zero your vacation will be no where.\nFor any other score we will plan a trip here on Earth.\n\n`)

input = readlineSync.question('Ready to begin: yes or no: ');

if (input === 'no') {
    f.print("That's to bad. If you need assitance don't hesitate to call. Bye.")
    process.exit()
}

f.clear();
f.programPause('Retrieving data from the database located in Mars!\nPlease wait');
f.programPause('Ok data have been received. Converting martian object notation to earth object notation. Also known as JSON.\nAlmost done!')

f.clear()

questions = f.shuffleQuestions(questions);
let totalQuestions = Math.floor(questions.length * .5)
for (let i = 0; i <= totalQuestions; i++) {
    let answer = f.askingQuestion(questions, i)
    if (answer[1] === answer[2].toLowerCase()) {
        correctNumber++
    }
    f.clear();
}

f.print(`Ok. All done ${userName}. Now I have to send the answers back to Mars.\nI do not have access to the answer key.`);
f.programPause(`Please wait. Now I have to convert the data back to martian object notation and send it to Mars.`)
f.clear();
f.print(`Finally!. I have a the final score`);
if (correctNumber != totalQuestions && correctNumber > 0) {
    f.programPause('')
    f.clear();
    f.print(`${userName} you did not get a perfect score, but you did not get a big fat ZERO.\nSo let's raise the stakes. I will ask one question. If you get right, you'll win an all expenses paid trip to the Moon. But if you miss, no vacation for you!`)
    f.print(`You can always say no and go somewhere here on Earth. But you look like the James Bond type.`)
    input = readlineSync.question('Raise the stakes: yes or no: ');
    if (input === 'yes') {
        let answer = f.askingQuestion(questions, (questions.length - 1))
        if (answer[1] === answer[2].toLowerCase()) {
            f.print(`Congratulation ${userName} you're going to the Moon`)
        } else {
            f.print(`Cancel your vacation request. You are not going anywhere this year.`)
        }
    } else {
        f.print(`Very well. I guess you did not fell adventurous. Your next vacation will be in Japan.`)
    }

} else if (correctNumber === totalQuestions) {
    f.print(`Congratulation ${userName} you got a perfect score. Your are going to the Moon.`)
} else {
    f.print(`Sorry ${userName} you got a null of a score. In other words your score was 0. You're not going anywhere this year.`)
}





