const minimalTree = require('./minimal_tree')
const { Node } = require('../../nodes')

describe('minimalTree(sortedArr)', () => {
    test('given sorted array it should return a Binary Search Tree with minimal height', () => {
        const increasingOrderArray = [1,2,5,8,9,10,16,17]
    
        // Expected Result
        const root = new Node(8)
        root.left = new Node(2, new Node(1), new Node(5))
        root.right = new Node(10, new Node(9), new Node(16, null, new Node(17)))
    
        expect(minimalTree(increasingOrderArray)).toEqual(root)
    })
})
