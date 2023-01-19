const isBalanced = require('./check_balanced')
const { Node } = require('../../nodes')

describe('isBalanced(binaryTree)', () => {
    test('given balanced binary tree return true', () => {
        //Creating balanced binary tree
        const node5 = new Node(5)
        const node4 = new Node(4)
        const node3 = new Node(3)
        const node2 = new Node(2, node3, node4)
        const root = new Node(1, node2, node5)
    
        expect(isBalanced(root)).toBe(true)
    })
    
    test('given unbalanced binary tree return false', () => {
        //Creating un balanced binary tree
        const node8 = new Node(8)
        const node7 = new Node(7)
        const node6 = new Node(6)
        const node5 = new Node(5, node6, node8)
        const node4 = new Node(4)
        const node3 = new Node(3)
        const node2 = new Node(2, node3, node4)
        const root = new Node(1, node2, node5)
    
        expect(isBalanced(root)).toBe(true)
    })
})
