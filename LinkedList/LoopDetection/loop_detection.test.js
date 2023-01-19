const { LinkedList, LinkedListNode } = require('../linked_list')
const findLoopBeginning = require('./loop_detection')

describe('findLoopBeginning(linkedList)', () => {
    test('given linked list with loop return node at beginning of loop', () => {
        const list = new LinkedList()
        const loopNode = new LinkedListNode(2)
        list.addToTail(1)
        list.addToTail(loopNode)
        list.addToTail(3)
        list.addToTail(4)
    
        list.addToTail(5)
        list.addToTail(6)
        list.addToTail(loopNode)
    
        expect(findLoopBeginning(list.head)).toBe(loopNode)
    })
    
    test('given linked list without loop return null', () => {
        const list = new LinkedList()
        list.addToTail(1)
        list.addToTail(2)
        list.addToTail(3)
        list.addToTail(4)
        list.addToTail(5)
    
        expect(findLoopBeginning(list.head)).toBe(null)
    })
})
