const validateBST = require('./validate_BST')
const { Node } = require('../../nodes')

describe('validateBST(root)', () => {
    test('given a binary search tree return true', () => {
        const node7 = new Node(16)
        const node6 = new Node(14)
        const node5 = new Node(15, node6, node7)
        const node4 = new Node(6)
        const node3 = new Node(3)
        const node2 = new Node(5, node3, node4)
        const root = new Node(10, node2, node5)
        
        expect(validateBST(root)).toBe(true)
    })

    test('given a not binary search tree return false', () => {
        const node7 = new Node(16)
        const node6 = new Node(14)
        const node5 = new Node(2, node6, node7)
        const node4 = new Node(6)
        const node3 = new Node(3)
        const node2 = new Node(5, node3, node4)
        const root = new Node(10, node2, node5)
        
        expect(validateBST(root)).toBe(false)
    })
})