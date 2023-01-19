const { LinkedList, LinkedListNode } = require("../linked_list");

const isIntersection = (list1, list2) => {
    let node1 = list1
    let node2 = list2
    let length1 = 0
    let length2 = 0

    while (node1.next) {
        node1 = node1.next
        length1++
    }
    while (node2.next) {
        node2 = node2.next
        length2++
    }

    if ( node1 !== node2 ) {
        return false;
    }

    node1 = list1
    node2 = list2

    while (length1 !== length2) {
        if( length1 > length2 ){
            node1 = node1.next
            length1--
        } else {
            node2 = node2.next
            length2--
        }
    }

    while (node1 && node2) {
        if (node1 === node2){
            return true
        }
        node1 = node1.next
        node2 = node2.next
    }
    return false
}

module.exports = isIntersection