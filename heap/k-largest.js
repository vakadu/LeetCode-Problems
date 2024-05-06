const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function kLargest(arr, k) {

    let queue = new MinPriorityQueue();

    for(let i=0; i<arr.length; i++) {
        queue.push(arr[i]);

        // if(queue.size() > k) {
        //     queue.pop();
        // }
    }

    console.log(queue.toArray());

}

kLargest([7, 10, 4, 3, 20, 15], 3);
