class Node {
    constructor (data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null
        this.count = 0
    }
    
    add (data) {
        const node = this.root
        if (node === null) {
            this.root = new Node(data)
            this.count++
        } else {
            const searchTree = function (node, t) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data)
                        t.count++
                        return
                    } else if (node.left !== null) {
                        return searchTree(node.left, t)
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data)
                        t.count++
                        return
                    } else if (node.right !== null) {
                        return searchTree(node.right, t)
                    }
                } else {
                    return null
                }
            }
            searchTree(node, this)
        }
    }

    remove (data) {
       const removeNode = function (node, data, count) {
            if (node === null) {
                return null
            }

            if (node.data === data) {
                // no child elements
                if (node.left === null && node.right === null) {
                    count--
                    return null
                }

                // only right child
                if (node.left === null) {
                    count--
                    return node.right
                }

                // only left child
                if (node.right === null) {
                    count--
                    return node.left
                }

                // has both child elements
                // using approach of finding left most element from right subtree
                let tempNode = node.right
                while (tempNode.left !== null) {
                    tempNode = node.left
                }
                node.data = tempNode.data
                node.right = removeNode(node.right, tempNode.data, count)
                return node
            } else if (data < node.data) {
                node.left = removeNode(node.left, data, count)
                return node
            } else {
                node.right = removeNode(node.right, data, count)
                return node
            }
       }
       this.root = removeNode(this.root, data, this.count)
    }

    min () {
        let node = this.root

        if (node === null) {
            return null
        }

        while (node.left !== null) {
            node = node.left
        }

        return node.data
    }

    max () {
        let node = this.root

        if (node === null) {
            return null
        }

        while (node.right !== null) {
            node = node.right
        }

        return node.data
    }

    find (data) {
        let node = this.root

        while (node) {
            if (data === node.data) {
                return node
            }

            if (data < node.data) {
                node = node.left
            } else {
                node = node.right
            }
        }

        return null
    }

    isPresent (data) {
        let node = this.root

        while (node) {
            if (data === node.data) {
                return true
            }

            if (data < node.data) {
                node = node.left
            } else {
                node = node.right
            }
        }

        return false
    }

    size () {
        return this.count
    }

    bfs () {
        var node = this.root
        var data = []
        var queue = []

        queue.push(node)
        while(queue.length) {
            node = queue.shift()
            data.push(node.data)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }

        return data
    }
}

const bst = new BinarySearchTree()

bst.add(4)
console.log('add 4')
console.log(bst.root)
console.log(bst.size())
bst.add(2)
console.log('add 2')
console.log(bst.root)
console.log(bst.size())
bst.add(6)
console.log('add 6')
console.log(bst.root)
console.log(bst.size())
bst.add(1)
console.log('add 1')
console.log(bst.root)
console.log(bst.size())
bst.add(3)
console.log('add 3')
console.log(bst.root)
console.log(bst.size())
console.log(bst.isPresent(4))
console.log(bst.isPresent(1))
console.log(bst.max())
console.log(bst.min())
console.log("breadth first search")
console.log(bst.bfs())
bst.remove(4)
console.log('remove 4')
console.log(bst.root)
console.log(bst.size())
bst.remove(100)
bst.remove(1)
console.log('remove 1')
console.log(bst.root)
console.log(bst.size())
bst.remove(6)
console.log('remove 6')
console.log(bst.root)
console.log(bst.size())
console.log('remove 2')
bst.remove(2)
console.log(bst.root)
console.log(bst.size())


console.log(bst.isPresent(4))
console.log(bst.isPresent(1))