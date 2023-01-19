class Queue {
    constructor() {
        this.queue = []
    }

    enqueue (value) {
        this.queue.unshift(value)
    }

    dequeue () {
        return this.queue.shift()
    }
    
    peek () {
        return this.queue[0]
    }
    isEmpty () {
        return this.queue.length === 0
    }
}

module.exports = { Queue }