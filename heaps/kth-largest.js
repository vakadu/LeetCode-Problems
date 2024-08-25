const {
    MinPriorityQueue,
    MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');

function findKthLargest(nums, k) {
    let heap = new MinPriorityQueue();

    for (let num of nums) {
        heap.enqueue(num);

        if (heap.size() > k) {
            heap.dequeue();
        }
    }
    console.log(heap);

    return heap.front().element;
}

function findKthSmallest(nums, k) {
    let heap = new MaxPriorityQueue();

    for (let num of nums) {
        heap.enqueue(num);

        if (heap.size() > k) {
            heap.dequeue();
        }
    }
    console.log(heap);

    return heap.front().element;
}

console.log(findKthSmallest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthSmallest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
