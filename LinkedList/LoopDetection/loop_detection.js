const findLoopBeginning = (head) => {
    let slow = head;
    let fast = head;

    //  Find where the two nodes meet
    while (fast !== null & fast.next !== null) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            break
        }
    }
    //  Error check, check if the nodes have met
    if (fast === null || fast.next === null) {
        return null
    }
    /*  Set slow back to beginning. Then move both forward at 
        the same rate until they collide.  */
    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }

    return fast
}


module.exports = findLoopBeginning