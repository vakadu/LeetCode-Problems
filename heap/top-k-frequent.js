const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function kFrequent(nums, k) {
    let map = new Map(), heap = new MinPriorityQueue(), res = [];

    for(let num of nums) {
        map.set(num, map.get(num) + 1 || 1)
    }

    for(let [key, val] of map) {
        heap.enqueue(key, val);

        if(heap.size() > k) {
            heap.dequeue();
        }
    }
    console.log(heap);


    while(!heap.isEmpty()) {
        console.log("fghjk");
        res.push(heap.dequeue().element)
    }

    console.log(res);

}

kFrequent([-1,-1], 1);
