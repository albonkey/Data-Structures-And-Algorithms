const SetOfStacks = require('./stack_of_plates')

describe('SetOfStacks', () => {
    test('stack working properly', () => {
        const myStack = new SetOfStacks(3)

        myStack.push(1)
        myStack.push(2)
        myStack.push(3)
        
        expect(myStack.pop()).toBe(3)
        expect(myStack.pop()).toBe(2)
    })

    test('new stacks are made when capacity of first one is reached', () => {
        const myStack = new SetOfStacks(3)

        myStack.push(1)
        myStack.push(2)
        myStack.push(3)
        myStack.push(3)
        
        expect(myStack.stacks.length).toBe(2)
    })
})

