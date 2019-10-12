let readlineSync = require('readline-sync');
let nl = () => { console.log('\n') }
let clear = () => { process.stdout.write('\033c') }
<<<<<<< HEAD

=======
// process.stdout.write('\033c');
// console.log("How are you?")
// console.log("Ready to play?")
>>>>>>> 0b53b196237c23a75827b8b46031b5080cf83e42
clear()
let score;
let input;
//readlineSync.question("Options: yes or no? ");
let userName = readlineSync.question('Hi. Who am I communicating with? ');
nl();
console.log(`Hi ${userName}. I am the HAL-9000 interstellar vacation planner.`)
nl();
console.log(`${userName}, I am going to ask you a set of questions.`);
nl();
console.log(`If you get a perfect score, the trip will be to outer space.\nIf you get a score of zero your vacation will be in Dade County.\nFor any other score we will plan a trip here on Earth.`)
<<<<<<< HEAD

=======
function startGame() {
    input = readlineSync.question("Options: yes or no? ")
    return input;
}
>>>>>>> 0b53b196237c23a75827b8b46031b5080cf83e42


