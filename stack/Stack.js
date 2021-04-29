class Stack {
    constructor () {
        this.count = 0
        this.storage = []
    }

    push (data) {
        this.storage[this.count] = data
        this.count++
    }

    pop () {
        if (this.count === 0) {
            return undefined
        }

        this.count--
        const data = this.storage[this.count]
        delete this.storage[this.count]
        return data
    }

    size () {
        return this.count
    }

    peek () {
        if (this.count === 0) {
            return undefined
        }
        return data = this.storage[this.count]
    }

    isEmpty () {
        return (this.count === 0)
    }
}

const stackz = new Stack()
stackz.push(1)
stackz.push(2)
console.log("size of the stack is " + stackz.size())
stackz.push(3)
stackz.push(4)
console.log("size of the stack is " + stackz.size())

console.log(stackz.pop())
console.log(stackz.pop())
console.log(stackz.pop())
console.log(stackz.pop())
console.log("size of the stack is " + stackz.size())
console.log(stackz.pop())