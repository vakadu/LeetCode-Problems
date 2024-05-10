const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function sortArr(nums) {
    const queue = new MinPriorityQueue(), res = [];

    for(let num of nums) {
        queue.enqueue(num);
    }

    while(!queue.isEmpty()) {
        res.push(queue.front().element);
        queue.dequeue();
    }

    console.log(res);

}

sortArr([5,2,3,1]);
