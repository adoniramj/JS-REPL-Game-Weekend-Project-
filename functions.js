let readlineSync = require('readline-sync');
module.exports = {
    programPause: function (message) {
        this.print(message)
        let seconds = Math.floor(Math.random() * 4 + 3)
        let waitTill = new Date().getTime() + seconds * 1000
        while (waitTill > new Date()) {
            //This functions creates a pause in the user interaction
        }
        this.clear();
    },
    clear: () => {
        process.stdout.write('\033c')
        //This function clears the screen
    },
    print: (msg) => {
        console.log(msg)
    },
    shuffleQuestions: function (array) {
        //shuffles the order of the question module.
        let i = array.length;
        let j = 0;
        let temp;

        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array;
    },
    askingQuestion: function (questions, num) {
        this.print('Please answer the following question::')
        console.log(questions[num].question)
        Object.keys(questions[num].options).forEach((key) => {
            console.log(key, questions[num].options[key])
        })
        let answer = readlineSync.question(`What is your answer? `)
        return [questions[num].num, questions[num].answer, answer]
    }
}
