class HashTable {
    constructor () {
        this.storage = []
        this.storageLimit = 5
    }

    hashGen (key, storageLimit) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % storageLimit
    }

    insert (key,value) {
        let hash = this.hashGen(key, this.storageLimit)
        if (this.storage[hash] === undefined) {
            this.storage[hash] = []
            this.storage[hash].push([key, value])
        } else {
            let added = false
            for (let i = 0; i < this.storage[hash].length; i++) {
                if (this.storage[hash][i][0] === key) {
                    this.storage[hash][i][1] = value
                    added = true
                }
            }
            if (added === false) {
                this.storage[hash] = []
                this.storage[hash].push([key, value])
            }
        }
    }

    remove (key) {
        let hash = this.hashGen(key, this.storageLimit)
        if (this.storage[hash].length === 1 && this.storage[hash][0][0] === key) {
            delete this.storage[hash][0]
        } else {
            for (let i = 0; i < this.storage[hash].length; i++) {
                if (this.storage[hash][i][0] === key) {
                    delete this.storage[hash][i]
                }
            }
        }
    }

    lookUp (key) {
        let hash = this.hashGen(key, this.storageLimit)
        for (let i = 0; i < this.storage[hash].length; i++) {
            if (this.storage[hash][i][0] === key) {
                return this.storage[hash][i][1]
            }
        }
        return undefined
    }

    print () {
        return this.storage
    }
}

let ht = new HashTable()
ht.insert('beau', 'person')
ht.insert('fido', 'dog')
ht.insert('rex', 'dinosour')
ht.insert('tux', 'penguin')
console.log(ht.print())
console.log(ht.lookUp('tux'))