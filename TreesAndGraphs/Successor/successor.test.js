const findSuccessor = require('./successor')
const { Node } = require('../../nodes')

describe('findSuccessor(node)', () => {
    test('given node should return the in-order successor of that node', () => {
        // Creating tree
        const root = new Node(1)
        const node2 = new Node(2)
        const node3 = new Node(3)
        const node4 = new Node(4)
        const node5 = new Node(5)
        root.left = node2 
        root.right = node3
        node2.parent = root
        node2.left = node4
        node2.right = node5
        node3.parent = root
        node4.parent = node2
        node5.parent = node2

        // Checking values instead of reference, due to circular dependency issue when jest try to print result as json
        const successor = findSuccessor(node2)
        expect(successor.value).toBe(node5.value)
    })
})

