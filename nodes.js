class Node {
    constructor(value, left = null, right = null, parent = null) {
        this.value = value
        this.left = left
        this.right = right
        this.parent = parent
    }
}

class GraphNode {
    constructor(value, adjacent = []) {
        this.value = value,
        this.adjacent = adjacent
        this.marked = false
    }

    addAdjacent(node) {
        this.adjacent = [...this.adjacent, node]
    }
}

module.exports = {
    Node,
    GraphNode
}

