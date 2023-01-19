const isPalindrome = require('./is_palindrome')
const { LinkedList } = require('../linked_list')

describe('isPalindrome(linkedList)', () => {
    test('given linked list that is palindrome return true', () => {
        const list = new LinkedList()
        list.addToTail('a')
        list.addToTail('b')
        list.addToTail('c')
        list.addToTail('c')
        list.addToTail('b')
        list.addToTail('a')
    
        expect(isPalindrome(list.head)).toBe(true)
    })
    
    test('given linked list that is not palindrome return false', () => {
        const list = new LinkedList()
        list.addToTail('a')
        list.addToTail('b')
        list.addToTail('c')
        list.addToTail('d')
        list.addToTail('e')
        list.addToTail('f')
    
        expect(isPalindrome(list.head)).toBe(false)
    })
})
