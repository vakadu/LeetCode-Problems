const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

function sum(nums, k1, k2) {
    let f1 = getSmallest(nums, k1), sum = 0;
    let f2 = getSmallest(nums, k2);

    for(let num of nums) {
        if(num > f1 && num < f2) {
            sum += num;
        }
    }

    console.log(sum);
}

function getSmallest(nums, k) {
    let heap = new MaxPriorityQueue();

    for(let num of nums) {
        heap.enqueue(num);

        if(heap.size() > k) {
            heap.dequeue();
        }
    }

    return heap.front().element;
}

sum([10, 2, 50, 12, 48, 13], 2, 6);
