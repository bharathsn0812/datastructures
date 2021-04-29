class Node {
    constructor (value, prev, next) {
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = this.tail = null
    }

    // add element at the tail
    prepend (value) {
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        } else {
            let oldTail = this.tail
            this.tail = new Node(value)
            this.tail.prev = oldTail
            oldTail.next = this.tail
        }
    }

    // add element to the head
    append (value) {
        if (!this.head) {
            this.head = this.tail = new Node(value)
        } else {
            let oldHead = this.head
            this.head = new Node(value)
            this.head.next = oldHead
            oldHead.prev = this.head
        }
    }

    deleteHead () {
        if (!this.head) {
            return null
        } else {
            let removedHead = this.head
            if (this.head === this.tail) {
                this.head = this.tail = null
            } else {
                this.head = this.head.next
                this.head.prev = null
            }
            return removedHead.value
        }
    }

    deleteTail () {
        if (!this.tail) {
            return null
        } else {
            let removedTail = this.tail
            if (this.tail === this.head) {
                this.tail = this.head = null
            } else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
            return removedTail.value
        }
    }

    search (value) {
        let currentNode = this.head

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode.value
            }
            currentNode = currentNode.next
        }

        return null
    }

    length () {
        let count = 0
        let currentNode = this.head
        while (currentNode) {
            count++
            currentNode = currentNode.next
        }
        return count
    }
}

const list = new DoublyLinkedList()

list.append(1)
list.append(2)
list.append(3)

list.prepend(0)
list.prepend(-1)

list.search(1) 
list.search(3) 
list.search(999) 

console.log(list.length())

list.deleteHead() // -1
list.deleteTail() // 3
list.deleteTail() // 2
list.deleteHead() // 0

list.deleteHead() // 1

list.deleteTail() // null
console.log(list.length())
