const { LinkedList, LinkedListNode } = require("../linked_list");

class PartialSum {
    constructor(){
        this.sum = null
        this.carry = 0
    }
}

const addLists = (list1, list2) => {
    result = new LinkedList()
    carry = 0

    while (list1 || list2) {
        value = carry

        if(list1){
            value += list1.data
        }

        if(list2){
            value += list2.data
        }

        // Appending node with value as last digit
        result.addToTail(value % 10)
        // Checking to see if it's a carry
        carry = (value >= 10) ? 1 : 0

        list1 = list1 ? list1.next : null
        list2 = list2 ? list2.next : null
    }
    // Checking if there is a carry on the last number
    if (carry) {
        result.addToTail(1)
    }

    return result.head
}

const addListsBackward = (list1, list2) => {
    const length1 = getLength(list1)
    const length2 = getLength(list2)

    if (length1 < length2) {
        list1 = padList(list1, length2 - length1)
    } else {
        list2= padList(list2, length1 - length2)
    }

    sum = addListsBackwardHelper(list1, list2)

    if ( sum.carry === 0) {
        return sum.sum
    } else {
        const result = insertBefore(sum.sum, sum.carry)
        return result
    }
}

const addListsBackwardHelper = (list1, list2) => {
    if (list1 === null && list2 === null){
        const sum = new PartialSum()
        return sum
    }

    const sum = addListsBackwardHelper(list1.next, list2.next)

    const value = sum.carry + list1.data + list2.data
    const fullResult = insertBefore(sum.sum, value % 10)

    sum.sum = fullResult
    sum.carry = value >= 10 ? 1 : 0

    return sum
}

const getLength = (list) => {
    let node = list
    let length = 0
    while (node) {
        length++
        node = node.next
    }

    return length
}

const padList = (list, padding) => {
    let head = list
    for (let i = 0; i < padding; i++) {
        head = insertBefore(head, 0)
    }
    return head
}

const insertBefore = (list, data) => {
    const node = new LinkedListNode(data)
    if (list !== null) {
        node.next = list
    }
    return node
}

module.exports = {
    addLists,
    addListsBackward
}