class Queue {
    constructor () {
        this.collection = []
    }

    enqueue (element) {
        this.collection.push(element)
    }

    dequeue () {
        return this.collection.shift()
    }

    size () {
        return this.collection.length
    }

    peek () {
        return this.collection[0]
    }

    isEmpty () {
        return (this.collection.length === 0)
    }

    print () {
        return this.collection
    }
}

let myQueue = new Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
console.log(myQueue.dequeue())
console.log(myQueue.size())
console.log(myQueue.peek())
console.log(myQueue.print())
console.log(myQueue.dequeue())
console.log(myQueue.print())