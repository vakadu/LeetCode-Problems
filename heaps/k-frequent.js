const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

function kFreq(nums, k) {
    let map = new Map(),
        result = [],
        heap = new MinPriorityQueue();

    for (let num of nums) {
        map.set(num, map.get(num) + 1 || 1);
    }

    for (let [key, val] of map) {
        heap.enqueue({ index: key }, val);

        if (heap.size() > k) {
            heap.dequeue();
        }
    }

    while (heap.size() > 0) {
        let top = heap.dequeue().element.index;
        result.push(top);
    }

    return result;
}

console.log(kFreq([1, 1, 1, 2, 2, 3], 2));
console.log(kFreq([1, 2], 2));
