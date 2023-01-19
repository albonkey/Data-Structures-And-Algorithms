const isBalanced = (root) => {
    return checkHeight(root) != Number.MIN_VALUE

    
}

const checkHeight = (root) => {
    if (root === null) return -1

    const leftHeight = checkHeight(root.left)
    if (leftHeight === Number.MIN_VALUE) return Number.MIN_VALUE

    const rightHeight = checkHeight(root.right)
    if (rightHeight === Number.MIN_VALUE) return Number.MIN_VALUE

    const heightDiff = leftHeight - rightHeight

    if (Math.abs(heightDiff) > 1) {
        return Number.MIN_VALUE
    } else {
        return Math.max(leftHeight, rightHeight) + 1
    }
}

module.exports = isBalanced