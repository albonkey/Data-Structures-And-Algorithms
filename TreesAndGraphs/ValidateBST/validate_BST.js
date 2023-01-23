const validateBST = (root) => {
    return checkBST(root, -Infinity, Infinity)
}

const checkBST = (node, low, high) => {
    if (node === null) return true
    if (node.value <= low || node.value > high) return false
    if (!checkBST(node.left, low, node.value) || !checkBST(node.right, node.value, high)) return false

    return true
}

module.exports = validateBST