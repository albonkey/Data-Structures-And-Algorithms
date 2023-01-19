const { LinkedList } = require('../../LinkedList/linked_list')

class Animal {
    constructor(name) {
        this.name = name
        this.order = null
    }
    setOrder(order) {
        this.order = order
    }
    getOrder() {
        return this.order
    }

    isOlderThan(animal) {
        return this.order < animal.getOrder()
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }
}

class AnimalQueue {
    constructor() {
        this.dogs = new LinkedList()
        this.cats = new LinkedList()
        this.order = 0
    }

    enqueue(animal) {
        animal.setOrder(this.order)
        this.order++

        if (animal instanceof Dog) {
            this.dogs.addToTail(animal)
        } else if (animal instanceof Cat) {
            this.cats.addToTail(animal)
        }
    }
    dequeueAny() {
        if (this.dogs.length === 0) {
            return this.dequeueCats()
        } else if (this.cats.length === 0) {
            return this.dequeueDogs()
        } 

        const dog = this.dogs.peek()
        const cat = this.cats.peek()

        if(dog.isOlderThan(cat)) return this.dequeueDogs()
        else return this.dequeueCats()
    }
    dequeueDogs() {
        return this.dogs.poll()
    }
    dequeueCats() {
        return this.cats.poll()
    }
}

module.exports = {
    AnimalQueue,
    Dog,
    Cat,
    Animal
}