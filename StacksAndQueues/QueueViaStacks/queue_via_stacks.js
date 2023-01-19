const { Stack } = require('../stack')

class QueueViaStacks {
    constructor() {
        this.stack1 = new Stack() 
        this.stack2 = new Stack()
    }

    queue(value) {
        this.stack1.push(value)
    }

    dequeue() {
        this.#shiftStack()
        return this.stack2.pop()
    }

    #shiftStack() {
        if (this.stack2.isEmpty()) {
            if (this.stack1.isEmpty()) {
                throw new Error('Queue Empty')
            }
            while (!this.stack1.isEmpty()) {
                const value = this.stack1.pop()
                this.stack2.push(value)
            }
        }
    }
}

module.exports = QueueViaStacks