const { Queue } = require('../../StacksAndQueues/queue')

const routeBetweenNodes = (nodeA, nodeB) => {
    return BFS(nodeA, nodeB)
}

const BFS = (start, target) => {
    const queue = new Queue()
    start.marked = true
    queue.enqueue(start)

    while (!queue.isEmpty()) {
        const node = queue.dequeue()
        if (node === target) return true

        for (const n of node.adjacent) {
            if (!n.marked) {
                n.marked = true
                queue.enqueue(n)
            }
        }
    }
    return false
}

module.exports = routeBetweenNodes