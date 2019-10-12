let readlineSync = require('readline-sync');
let nl = () => { console.log('\n') }
let clear = () => { process.stdout.write('\033c') }

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



