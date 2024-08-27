const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

class KthLargest {
    constructor(k, nums) {
        this.heap = new MinPriorityQueue();
        this.k = k;
        for (let num of nums) {
            this.add(num);
        }
    }

    add(val) {
        if (this.heap.size() < this.k) {
            this.heap.enqueue(val);
        } else if (val > this.heap.front().element) {
            this.heap.dequeue();
            this.heap.enqueue(val);
        }

        return this.heap.front().element;
    }
}

let kth = new KthLargest(3, [4, 5, 8, 2]);
console.log(kth.add(3));
console.log(kth.add(5));
console.log(kth.add(10));
console.log(kth.add(9));
console.log(kth.add(4));
