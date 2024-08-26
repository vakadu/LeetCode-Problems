const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

function merge(arr) {
    let heap = new MinPriorityQueue(),
        i = 0;
    (j = 0), (result = []);

    while (i < arr.length) {
        if (j < arr[i].length) {
            heap.enqueue(arr[i][j]);
            j++;
        } else {
            j = 0;
            i++;
        }
    }

    while (heap.size() > 0) {
        let top = heap.dequeue();
        result.push(top.element);
    }

    return result;
}

console.log(
    merge([
        [1, 2, 3, 4],
        [2, 2, 3, 4],
        [5, 5, 6, 6],
        [7, 8, 9, 9],
    ])
);
