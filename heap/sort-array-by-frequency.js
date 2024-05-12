const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function byFreq(nums) {
    let map = new Map(), heap = new MinPriorityQueue(), res = [];

    for(let num of nums) {
        map.set(num, map.get(num) + 1 || 1);
    }

    for([key, val] of map) {
        heap.enqueue({ num: key, count: val }, val);
    }

    while(!heap.isEmpty()) {
        let { num, count } = heap.front().element;
        let arr = new Array(count).fill(num);
        res.push(...arr);
        heap.dequeue();
    }

    return res;
}

console.log(byFreq([2,3,1,3,2]));
