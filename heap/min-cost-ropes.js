const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function minCost(nums) {
    let heap = new MinPriorityQueue(), tSum = 0;

    for(let num of nums) {
        heap.enqueue(num);
    }

    while(heap.size() >= 2) {
        let first = heap.dequeue().element;
        let second = heap.dequeue().element;
        let tempSum = first + second;
        tSum += tempSum;
        heap.enqueue(tempSum);
    }

    console.log(tSum);

}

minCost([4,3,2,6]);
