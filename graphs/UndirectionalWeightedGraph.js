class WeightedGraph {
    constructor () {
        this.adjacencyList = {};
    }
    
    addVertex (vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge (vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
}

let g = new WeightedGraph();
g.addVertex("Dublin");
g.addVertex("Wicklow");
g.addVertex("Limerick");
g.addEdge("Dublin", "Wicklow", 2)
g.addEdge("Dublin", "Limerick", 3)
g.addEdge("Limerick", "Wicklow", 4)
console.log(g.adjacencyList);