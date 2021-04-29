class UnweightedGraph {
    constructor () {
        this.adjacencyList = {};
    }

    addVertex (vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge (vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge (vertex1,vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex (vertex) {
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
}

let g = new UnweightedGraph();
g.addVertex("Dublin");
g.addVertex("Wicklow");
g.addVertex("Limerick");
g.addVertex("Cork");
g.addEdge("Dublin", "Wicklow");
g.addEdge("Dublin", "Limerick");
g.addEdge("Limerick", "Cork");
console.log(g.adjacencyList);