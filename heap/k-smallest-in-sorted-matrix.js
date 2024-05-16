const { MaxPriorityQueue } = require("@datastructures-js/priority-queue")

function sortedMatrix(matrix, k) {

    let heap = new MaxPriorityQueue();

    for(let item of matrix) {
        for(let num of item) {
            heap.enqueue(num);

            if(heap.size() > k) {
                heap.dequeue();
            }
        }
    }


    return heap.front().element
}

sortedMatrix([[1,5,9],[10,11,13],[12,13,15]], 8)
