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
    },
    print: (msg) => {
        console.log(msg)
    },
    shuffleQuestions: function (array) {
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
    }
}
