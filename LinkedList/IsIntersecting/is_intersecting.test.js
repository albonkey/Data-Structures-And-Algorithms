const isIntersection = require('./is_intersecting')
const { LinkedList, LinkedListNode } = require('../linked_list')

describe('isIntersection(linkedList1, linkedList2)', () => {
    test('given two linked lists that intersect return true', () => {
        // Creating two intersected Linked Lists
        const list1 = new LinkedList()
        const list2 = new LinkedList()
        const intersectingNode = new LinkedListNode('d')
        list1.addToTail('a')
        list1.addToTail(intersectingNode)
        list1.addToTail('c')
        list1.addToTail('f')
    
        list2.addToTail('d')
        list2.addToTail('b')
        list2.addToTail(intersectingNode)
    
    
        expect(isIntersection(list1.head, list2.head)).toBe(true)
    })
    
    test('given two linked lists that does not intersect return false', () => {
        // Creating two intersected Linked Lists
        const list1 = new LinkedList()
        const list2 = new LinkedList()
        list1.addToTail('a')
        list1.addToTail('b')
        list1.addToTail('c')
    
        list2.addToTail('d')
        list2.addToTail('e')
        list2.addToTail('f')
    
    
        expect(isIntersection(list1.head, list2.head)).toBe(false)
    })
})


