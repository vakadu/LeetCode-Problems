const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

function findK(arr, k, x) {
    let max = new MaxPriorityQueue(),
        result = [];

    for (let i = 0; i < arr.length; i++) {
        max.enqueue(arr[i], Math.abs(arr[i] - x));

        if (max.size() > k) {
            max.dequeue();
        }
    }

    while (!max.isEmpty()) {
        result.push(max.dequeue().element);
    }

    return result.sort((a, b) => a - b);
}

console.log(findK([1, 2, 3, 4, 5], 4, 3));
console.log(findK([1, 2, 3, 4, 5], 4, -1));
