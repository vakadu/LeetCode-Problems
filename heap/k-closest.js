const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

function kClosest(arr, k, x) {
    let queue = new MaxPriorityQueue(), result = [];

    for(let i=0; i<arr.length; i++) {
        queue.enqueue(arr[i], Math.abs(arr[i] - x));

        if(queue.size() > k) {
            queue.dequeue();
        }
    }

    while(!queue.isEmpty()) {
        result.push(queue.dequeue())
    }

    return result.sort((a,b) => a-b)
}

console.log(kClosest([1,2,3,4,5], 4, 3));
