const MinStack = require('./stack_min')

describe('MinStack', () => {
    test('MinStack.min() should return minimum value in stack', () => {
        const myStack = new MinStack()
    
        myStack.push(5)
        myStack.push(4)
        myStack.push(10)
        myStack.push(7)
    
        expect(myStack.min()).toBe(4)
    })
})
