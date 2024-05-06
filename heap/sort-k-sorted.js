const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function kSorted(arr, k) {
    let heap = new MinPriorityQueue(), result = [];

    for(let i=0; i<arr.length; i++) {
        heap.push(arr[i]);

        if(heap.size() > k) {
            result.push(heap.front());
            heap.pop();
        }
    }

    while(heap.size() > 0) {
        result.push(heap.front());
        heap.pop();
    }

    console.log(result);
}

kSorted([10,9,8,7,4,70,60,50], 4);
