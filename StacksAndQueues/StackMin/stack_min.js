const { Stack } = require('../stack')

class MinStack extends Stack {
    constructor() {
        super()
        this.stack2 = new Stack()
    }

    push (value) {
        if (value <= this.min()) {
            this.stack2.push(value)
        }
        this.stack.push(value)
    }

    min () {
        if (this.stack2.isEmpty()) {
            return 100
        } else {
            return this.stack2.peek()

        }
    }
}

module.exports = MinStack