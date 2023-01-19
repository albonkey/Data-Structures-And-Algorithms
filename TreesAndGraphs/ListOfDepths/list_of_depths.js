const { LinkedList } = require('../../LinkedList/linked_list')

const listOfDepths = (binaryTree) => {
    const linkedLists = []
    traversingTree(binaryTree, linkedLists, 0)

    return linkedLists
}

const traversingTree = (node, linkedLists, level) => {
    if ( node !== null) {
        traversingTree(node.left, linkedLists, level + 1)
        if (!linkedLists[level]) {
            linkedLists[level] = new LinkedList()
        }
        linkedLists[level].addToTail(node)
        traversingTree(node.right, linkedLists, level + 1)
    }
}

module.exports = listOfDepths