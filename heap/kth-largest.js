const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function kLargest(arr, k) {
    let queue = new MinPriorityQueue();

    for(let i=0; i<arr.length; i++) {
        queue.push(arr[i]);
        console.log(queue);

        // if(queue.size() > k) {
        //     queue.pop()
        // }
    }

}

kLargest([3,2,1,5,6,4], 2);
