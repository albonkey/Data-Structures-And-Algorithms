const { LinkedList } = require('../../LinkedList/linked_list')
const { Node } = require('../../nodes')
const listOfDepths = require('./list_of_depths')

describe('listOfDepths(binaryTree)', () => {
    test(`given a binary tree it should return an array of linked lists with 
        the nodes at each depth`, () => {
        //Creating binary tree
        const node7 = new Node(4)
        const node6 = new Node(8)
        const node5 = new Node(3, node7)
        const node4 = new Node(2)
        const node3 = new Node(7, node6)
        const node2 = new Node(1, node4, node5)
        const root = new Node(0, node2, node3)
    
        // Expected result
        const level1 = new LinkedList()
        level1.addToTail(root)
    
        const level2 = new LinkedList()
        level2.addToTail(node2)
        level2.addToTail(node3)
    
        const level3 = new LinkedList()
        level3.addToTail(node4)
        level3.addToTail(node5)
        level3.addToTail(node6)
    
        const level4 = new LinkedList()
        level4.addToTail(node7)
    
        const expectedResult = [level1, level2, level3, level4]
        expect(listOfDepths(root)).toEqual(expectedResult)
    })
    
})
