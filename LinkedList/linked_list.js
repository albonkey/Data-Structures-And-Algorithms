class LinkedList {
    constructor(head=null) {
        this.head = head
        this.length = head ? 1 : 0
    }

    addToTail(value){
        let node = this.head
        this.length++
        if (node === null) {
            this.head = new LinkedListNode(value)
            return;
        }
        while (node.next) {
            node = node.next
        }
        if(value instanceof LinkedListNode) {
            node.next = value
        } else {
            node.next = new LinkedListNode(value)
        }
        
    }

    poll() {
        if (this.head !== null) {
            const value = this.head?.data
            this.head = this.head?.next
            this.length--
            return value
        }
        return null
    }

    peek() {
        return this.head.data
    }

    getLength(){
        return this.length
    }

    print(){ 
        let node = this.head
        let string = ""
        while (node) {
            string += node.data

            if(node.next){
                string += ' --> '
            }
            node = node.next
        }
        console.log(string)
    }
}

class LinkedListNode {
    constructor(data){
        this.data = data
        this.next = null
    }
}

module.exports = { LinkedList, LinkedListNode }