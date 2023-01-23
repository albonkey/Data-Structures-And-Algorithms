const findSuccessor = (node) => {
    if (node === null) return null

    if (node.right !== null) {
       return findLeftMostChild(node.right)
    } else {
        let q = node
        let successor = node.parent
        while (successor !== null && successor.left !== node) {
            q = successor
            successor = successor.parent
        }
        return successor
    }
}

const findLeftMostChild = (node) => {
    if (node === null) return null

    let leftMost = node;
    while (leftMost.left !== null) {
        leftMost = leftMost.left
    }
    return leftMost
}

module.exports = findSuccessor
