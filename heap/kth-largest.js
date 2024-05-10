const { MaxPriorityQueue, MinPriorityQueue } = require("@datastructures-js/priority-queue");

function kLargest(arr, k) {
    let queue = new MinPriorityQueue();

    for(let i=0; i<arr.length; i++) {
        queue.enqueue(arr[i]);

        if(queue.size() > k) {
            queue.dequeue()
        }
    }

    console.log(queue.front().element);

}

kLargest([3,2,1,5,6,4], 2);
