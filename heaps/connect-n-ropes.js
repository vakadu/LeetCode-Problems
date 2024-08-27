const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

function connect(ropes) {
    let heap = new MinPriorityQueue(),
        sum = 0,
        result = 0;

    for (let num of ropes) {
        heap.enqueue(num);
    }

    while (heap.size() >= 2) {
        let first = heap.dequeue().element;
        let second = heap.dequeue().element;
        result += first + second;
        sum = first + second;
        heap.enqueue(sum);
    }

    return result;
}

console.log(connect([4, 3, 2, 6]));
console.log(connect([1, 2, 3]));
