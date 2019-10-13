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
    questionOrder = function (size) {
        let numArray = [];
        // let size = size;
        let k = -1;
        while (numArray.length < size) {
            k++
            numArray.push(k)
        }

        let i = numArray.length;
        let j = 0;
        let temp;

        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = numArray[i]
            numArray[i] = numArray[j]
            numArray[j] = temp
        }
        return numArray;
    }
}
