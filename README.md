# Djikstra Algorithm Implementation
This is an implementation of Dijkstra's algorithm for finding the shortest path between two nodes in a graph. It is implemented in JavaScript and can be accessed in https://djikstra-algorithm-implementation.netlify.app/.

# How It Works
Dijkstra's algorithm is a graph search algorithm that solves the single-source shortest path problem for a graph with non-negative edge weights, producing a shortest path tree. This implementation uses an adjacency list to represent the graph.

The algorithm works by maintaining a set of nodes for which the shortest path is known, and repeatedly selecting the node with the minimum distance from the set of nodes for which the shortest path is not yet known. The distance from the start node to each node is stored in a distance map, and the predecessor of each node on the shortest path is stored in a predecessor map.

The algorithm terminates when the destination node is added to the set of nodes for which the shortest path is known. At this point, the shortest path can be reconstructed by following the predecessor pointers from the destination node back to the start node.

# Time and Space Complexity
The time complexity of Dijkstra's algorithm is O(E log V), where E is the number of edges and V is the number of nodes in the graph. The space complexity is O(V).

# References
Dijkstra's algorithm - Wikipedia
<br/>
[Dijkstra's algorithm - GeeksforGeeks](https://www.geeksforgeeks.org/dijkstras-
