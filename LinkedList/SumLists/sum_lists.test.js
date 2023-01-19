const { LinkedList } = require('../linked_list')
const {addLists, addListsBackward} = require('./sum_lists')

describe('addLists(linkedList1, linkedList2)', () => {
    test('given linked list 1-4-7 and 3-4-5 should return 4-8-2-1', () => {
        // LinkedList representation of number 741
        const list1 = new LinkedList()
        list1.addToTail(1)
        list1.addToTail(4)
        list1.addToTail(7)
    
        // LinkedList representation of number 543
        const list2 = new LinkedList()
        list2.addToTail(3)
        list2.addToTail(4)
        list2.addToTail(5)
    
        // // LinkedList representation of number 1284
        const list3 = new LinkedList()
        list3.addToTail(4)
        list3.addToTail(8)
        list3.addToTail(2)
        list3.addToTail(1)
        
        expect(addLists(list1.head, list2.head)).toEqual(list3.head)
    })
})

describe('addListsBackwards(linkedList1, linkedList2)', () => {
    test('given linked list 1-4-7 and 3-4-5 should return 4-9-2', () => {
        // LinkedList representation of number 147
        const list1 = new LinkedList()
        list1.addToTail(1)
        list1.addToTail(4)
        list1.addToTail(7)
    
        // LinkedList representation of number 345
        const list2 = new LinkedList()
        list2.addToTail(3)
        list2.addToTail(4)
        list2.addToTail(5)
    
        // // LinkedList representation of number 492
        const list3 = new LinkedList()
        list3.addToTail(4)
        list3.addToTail(9)
        list3.addToTail(2)
        
        expect(addListsBackward(list1.head, list2.head)).toEqual(list3.head)
   })
})


