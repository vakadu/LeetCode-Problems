const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

function kClosestOrigin(points, k) {
    let heap = new MaxPriorityQueue(), result = [];

    for(let num of points) {
        let sum = 0;
        for(let item of num) {
            sum += Math.pow(item, 2);
        }
        heap.enqueue(num, sum);

        if(heap.size() > k) {
            heap.dequeue();
        }
    }

    while(!heap.isEmpty()) {
        result.push(heap.dequeue().element);
    }

    console.log(result);
}

kClosestOrigin([[3,3],[5,-1],[-2,4]], 2);
