let readlineSync = require('readline-sync');

function programPause(seconds, message) {
    console.log(message)
    let waitTill = new Date().getTime() + seconds * 1000
    while (waitTill > new Date()) {

    }
}

function cl(message) {
    console.log(message)
}

let clear = () => { process.stdout.write('\033c') }




clear()
let score;
let input;
//readlineSync.question("Options: yes or no? ");
let userName = readlineSync.question('Hi. Who am I communicating with? ');

cl(`Hi ${userName}. I am the HAL-9000 interstellar vacation planner.\n\n`)

cl(`${userName}, I am going to ask you a set of questions.\n\n`);

cl(`If you get a perfect score, the trip will be to outer space.\nIf you get a score of zero your vacation will be in Dade County.\nFor any other score we will plan a trip here on Earth.\n\n`)

input = readlineSync.question('Ready to begin: yes or no: ');

if (input === 'no') {
    console.log("That's to bad. If you need assitance don't hesitate to call. Bye.")
    process.exit()
}

clear();
cl('Retrieving data from the moon database!')
programPause(5, 'Please wait');
clear()
cl('Ok data have been received. Converting lunar object notation to JS object notation.')
programPause(4, 'Almost done!');
