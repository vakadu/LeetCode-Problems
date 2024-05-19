const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

function sort(s) {
    let heap = new MaxPriorityQueue(), map = new Map(), res = "";

    for(let char of s) {
        map.set(char, map.get(char) + 1 || 1);
    }

    for(let [key, val] of map) {
        heap.enqueue({ k: key, v: val }, val)
    }

    while(!heap.isEmpty()) {
        let val = heap.front().element.v;
        let key = heap.front().element.k;

        for(let i=0; i<val; i++) {
            res += key
        }

        heap.dequeue()
    }

    console.log(res);

}

sort("tree");
