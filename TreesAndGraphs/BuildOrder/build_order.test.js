const findBuildOrder = require('./build_order')

describe('findBuildOrder(projects, dependencies)', () => {
    test('given projects and dependencies return possible build order', () => {
        const projects = ['a', 'b', 'c', 'd', 'e', 'f']
        const dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']]

        const buildOrder = findBuildOrder(projects, dependencies).map(project => project.name)
        const expectedOrder = ['f', 'e', 'b', 'a', 'd', 'c']

        expect(buildOrder).toEqual(expectedOrder)
    })
})