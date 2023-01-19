const QueueViaStacks = require('./queue_via_stacks')

describe('QueueViaStacks', () => {
    test('queue is working properly', () => {
        const queue = new QueueViaStacks()
        queue.queue(1)
        queue.queue(2)
        
        expect(queue.dequeue()).toBe(1)
    
        queue.queue(4)
    
        expect(queue.dequeue()).toBe(2)
    })
})

