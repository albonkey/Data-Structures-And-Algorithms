const routeBetweenNodes = require('./route_between_nodes')
const { GraphNode } = require('../../nodes')

describe('route_between_nodes(A, B)', () => {
    test('given graph with route between A and B return true ', () => {
        const node1 = new GraphNode(1)
        const node2 = new GraphNode(2)
        const node3 = new GraphNode(3)
        const node4 = new GraphNode(4)
        const node5 = new GraphNode(5)
        
        node1.addAdjacent(node2)
        node1.addAdjacent(node3)
        node2.addAdjacent(node4)
        node4.addAdjacent(node3)
        node4.addAdjacent(node5)
    
        expect(routeBetweenNodes(node1, node5)).toBe(true)
    })

    test('given graph with no route between A and B return false', () => {
        const node1 = new GraphNode(1)
        const node2 = new GraphNode(2)
        const node3 = new GraphNode(3)
        const node4 = new GraphNode(4)
        const node5 = new GraphNode(5)
        
        node1.addAdjacent(node2)
        node1.addAdjacent(node3)
        node2.addAdjacent(node4)
        node4.addAdjacent(node3)
        node4.addAdjacent(node1)
    
        expect(routeBetweenNodes(node1, node5)).toBe(false)
    })

})


