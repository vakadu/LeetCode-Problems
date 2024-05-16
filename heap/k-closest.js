const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

function kClosest(arr, k, x) {
    let heap = new MaxPriorityQueue(), res = [];

    for(let num of arr) {
        let temp = Math.abs(num - x);
        heap.enqueue(num ,temp);

        if(heap.size() > k) {
            heap.dequeue()
        }
    }

    console.log(heap);

    while(!heap.isEmpty()) {
        res.push(heap.dequeue().element);
    }

    return res.sort((a,b) => a-b)
}

console.log(kClosest([1,2,3,4,5], 4, 3));
