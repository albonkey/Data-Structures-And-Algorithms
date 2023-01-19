const {AnimalQueue, Dog, Cat, Animal} = require('./animal_shelter')

describe('AnimalQueue', () => {
    test('given a queue of animals AnimalQueue.dequeueDogs() should only return dogs', () => {
        const animalShelter = new AnimalQueue()
        animalShelter.enqueue(new Cat('Minni'))
        animalShelter.enqueue(new Dog('Buddy'))
        animalShelter.enqueue(new Dog('Bob'))
        animalShelter.enqueue(new Cat('Nostet'))
        animalShelter.enqueue(new Cat('Nala'))

        let dog = animalShelter.dequeueDogs()
        while(dog) {
            expect(dog instanceof Dog).toBe(true)

            dog = animalShelter.dequeueDogs()
        }
    })

    test('given a queue of animals AnimalQueue.dequeueCats() should only return cats', () => {
        const animalShelter = new AnimalQueue()
        animalShelter.enqueue(new Cat('Minni'))
        animalShelter.enqueue(new Dog('Buddy'))
        animalShelter.enqueue(new Dog('Bob'))
        animalShelter.enqueue(new Cat('Nostet'))
        animalShelter.enqueue(new Cat('Nala'))

        let cat = animalShelter.dequeueCats()
        while(cat) {
            expect(cat instanceof Cat).toBe(true)

            cat = animalShelter.dequeueCats()
        }
    })

    test('given a queue of animals AnimalQueue.dequeueAny() should only return animals', () => {
        const animalShelter = new AnimalQueue()
        animalShelter.enqueue(new Cat('Minni'))
        animalShelter.enqueue(new Dog('Buddy'))
        animalShelter.enqueue(new Dog('Bob'))
        animalShelter.enqueue(new Cat('Nostet'))
        animalShelter.enqueue(new Cat('Nala'))

        let animal = animalShelter.dequeueAny()
        while(animal) {
            expect(animal instanceof Animal).toBe(true)

            animal = animalShelter.dequeueAny()
        }
    })

    test('given a queue of animals AnimalQueue.DequeueAny() should always return oldest Animal', () => {
        const animalShelter = new AnimalQueue()
        animalShelter.enqueue(new Cat('Minni'))
        animalShelter.enqueue(new Dog('Buddy'))
        animalShelter.enqueue(new Dog('Bob'))
        animalShelter.enqueue(new Cat('Nostet'))
        animalShelter.enqueue(new Cat('Nala'))

        let animal = animalShelter.dequeueAny()

        while(animal) {
            const nextAnimal = animalShelter.dequeueAny()
            if(nextAnimal !== null) {
                expect(animal.order).toBeLessThan(nextAnimal.order)
            }
            animal = nextAnimal
        }
    })
})
