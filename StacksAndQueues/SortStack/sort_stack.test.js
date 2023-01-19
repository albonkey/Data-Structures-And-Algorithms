const sortStack = require('./sort_stack')
const { Stack } = require('../stack')

describe('sortStack(stack)', () => {
    test('given a unsorted stack should return stack in sorted order (smallest item on top)', () => {
        // Creating and sorting stack
        const myStack = new Stack()
        for (const value of [3, 2, 5, 4, 7]) {
            myStack.push(value)
        }
        sortStack(myStack)
    
        // Creating another stack that is already sorted
        const sortedStack = new Stack()
        for (const value of [7, 5, 4, 3, 2]) {
            sortedStack.push(value)
        }
      
        expect(myStack).toEqual(sortedStack)
    })
})

