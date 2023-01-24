const findBuildOrder = (projects, dependencies) => {
    const graph = buildGraph(projects, dependencies)
    return orderProjects(graph.getNodes())
}

const buildGraph = (projects, dependencies) => {
    const graph = new Graph()

    for (const dependency of dependencies) {
        const first = dependency[0]
        const second = dependency[1]
        graph.addEdge(first, second)
    }

    for (const project of projects) {
        graph.getOrCreateNode(project)
    }
    
    return graph
}

const orderProjects = (projects) => {
    const order = []
    let endOfList = addNonDependent(order, projects, 0)

    let toBeProcessed = 0

    while (toBeProcessed < order.length) {
        const current = order[toBeProcessed]

        if (current === null) return null

        const children = current.getChildren()

        for (const child of children) {
            child.decrementDependencies()
        }

        endOfList = addNonDependent(order, children, endOfList)

        toBeProcessed++
    }

    return order
}

const addNonDependent = (order, projects, offset) => {
    for (const project of projects) {
        if (project.getNumberOfDependencies() === 0) {
            order[offset] = project
            offset++
        }
    }

    return offset
}

class Project {
    constructor(name) {
        this.name = name
        this.children = []
        this.map = new Map()
        this.dependencies = 0
    }

    addNeighbor(node) {
        if (!this.map.has(node.getName())) {
            this.children.push(node)
            this.map.set(node.getName(), node)
            node.incrementDependencies()
        }
    }

    incrementDependencies() { this.dependencies++ }
    decrementDependencies() { this.dependencies-- }
    getName() { return this.name }
    getChildren() { return this.children }
    getNumberOfDependencies() { return this.dependencies }
}

class Graph {
    constructor() {
        this.nodes = []
        this.map = new Map()
    }

    getOrCreateNode(name) {
        if (!this.map.has(name)) {
            const node = new Project(name)
            this.nodes.push(node)
            this.map.set(name, node)
        }

        return this.map.get(name)
    }

    addEdge(startName, endName) {
        const start = this.getOrCreateNode(startName)
        const end = this.getOrCreateNode(endName)
        start.addNeighbor(end)
    }
    
    getNodes() { return this.nodes }
}

module.exports = findBuildOrder

