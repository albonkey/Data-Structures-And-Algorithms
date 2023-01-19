const { Stack } = require('../../StacksAndQueues/stack')

const isPalindrome = (list) => {
    let node = list
    let runner = list
    const stack = new Stack()

    while (runner && runner.next) {
        stack.push(node.data)

        node = node.next
        runner = runner.next.next
    }

    if ( runner ) {
        node = node.next
    }

    while (node) {
        if ( stack.pop() !== node.data) {
            return false
        }
        node = node.next
    }
    return true
}


module.exports = isPalindrome