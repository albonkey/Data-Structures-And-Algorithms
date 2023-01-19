const { Stack } = require("../stack");

class SetOfStacks {
    constructor(capacity) {
        this.stacks = []
        this.capacity = capacity
        this.current = capacity
    }

    push(value) {
        if(!this.stacks.length || this.current === this.capacity) {
            this.stacks.push(new Stack())
            this.current = 0
        }
        // Finding last stack and pushing value onto there
        this.current += 1
        this.stacks[this.stacks.length - 1].push(value)
    }

    pop() {
        // Remove last stack if its empty
        if (this.current === 0) {
            this.stacks.pop()
            this.current = this.capacity
            
        }
        // Return false if SetOfStacks is empty
        if (!this.stacks.length) return false

        this.current -= 1
        return this.stacks[this.stacks.length - 1].pop()
    }
}

module.exports = SetOfStacks