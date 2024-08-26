const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

function rankArray(arr) {
    let heap = new MinPriorityQueue(),
        result = new Array(arr.length),
        ind = 1,
        prevVal = null,
        prevRank = 1;

    for (let i = 0; i < arr.length; i++) {
        heap.enqueue({ el: arr[i], ind: i }, arr[i]);
    }

    while (heap.size() > 0) {
        let top = heap.dequeue();

        if (top.element.el === prevVal) {
            result[top.element.ind] = prevRank;
        } else {
            prevRank = ind;
            result[top.element.ind] = ind;
            ind++;
        }

        prevVal = top.element.el;
    }

    return result;
}

console.log(rankArray([20, 15, 26, 2, 98, 6]));
console.log(rankArray([2, 2, 1, 6]));
