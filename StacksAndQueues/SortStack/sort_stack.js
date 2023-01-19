const { Stack } = require('../stack')

function sortStack(stack) {
    const secondaryStack = new Stack()

    while (!stack.isEmpty()) {
        const value = stack.pop()
        
        while(!secondaryStack.isEmpty() && value < secondaryStack.peek()) {
            stack.push(secondaryStack.pop())
        }
        secondaryStack.push(value)
    }

    while (!secondaryStack.isEmpty()) {
        stack.push(secondaryStack.pop())
    }
}

module.exports = sortStack