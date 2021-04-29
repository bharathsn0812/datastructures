class Node {
    constructor (value, next) {
        this.value = value
        this.next = next || null
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null
    }

    append (value) {
        if (!this.head) {
            this.head = new Node(value)
        } else {
            let oldHead = this.head
            this.head = new Node(value)
            this.head.next = oldHead
        }
    }

    prepend (value) {
        if (!this.head) {
            this.head = new Node(value)
        } else {
            let currentNode = this.head
            while(currentNode) {
                if (!currentNode.next) {
                    break
                }
                currentNode = currentNode.next
            }
            currentNode.next = new Node(value)
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


let list = new SinglyLinkedList()

list.append(1)
list.append(2)
list.append(3)

list.prepend(4)
list.prepend(5)
list.prepend(6)

console.log(list.length())
console.log(list.search(3))

console.log(list.length())
console.log(list.search(2))
