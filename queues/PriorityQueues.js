class PriorityQueues {
    constructor () {
        this.collection = []
    }

    // element = [value, priority] , priority 1 is highest
    enqueue (element) {
        if (this.isEmpty()) {
            this.collection.push(element)
        } else {
            let added = false
            for (let i = 0; i < this.collection.length; i++) {
                if (element[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, element)
                    added = true
                    break
                }
            }
            if (!added) {
                this.collection.push(element)
            }
        }
    }

    dequeue () {
        if (this.isEmpty()) {
            return undefined
        }
        return this.collection.shift()
    }

    isEmpty () {
        return (this.collection.length === 0)
    }

    size () {
        return this.collection.length
    }

    peek () {
        return this.collection[0]
    }

    print () {
        return this.collection
    }
}

let myQueue = new PriorityQueues()
myQueue.enqueue(['Beau Carnes', 2])
myQueue.enqueue(['Quincy Larson', 3])
myQueue.enqueue(['Ewa Mitulska-Wójcik', 1])
myQueue.enqueue(['Briana Swift', 2])
console.log(myQueue.print())
console.log(myQueue.dequeue())
console.log(myQueue.size())
console.log(myQueue.peek())
console.log(myQueue.print())
console.log(myQueue.dequeue())
console.log(myQueue.print())