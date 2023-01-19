const { Node } = require('../../nodes')

const minimalTree = (sortedArr) => {
    return createMinimalBST(sortedArr, 0, sortedArr.length-1)
}


const createMinimalBST = (arr, start, end) => {
    if (end < start) return null
    const mid = parseInt((start + end)/2)
    const node = new Node(
        arr[mid], 
        createMinimalBST(arr, start, mid-1), 
        createMinimalBST(arr, mid + 1, end)
    )
    return node
}

module.exports = minimalTree