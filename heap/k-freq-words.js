const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function freq(words, k) {
    let map = new Map(), res = [];

    for(let word of words) {
        map.set(word, map.get(word) + 1 || 1)
    }

    let heap = new MinPriorityQueue({
        compare: comparator
    })


    for(let [key, val] of map) {
        heap.enqueue({ k: key, v: val } ,val);

        if(heap.size() > k) {
            heap.dequeue();
        }
    }

    while(!heap.isEmpty()) {
        let temp = heap.front().k;
        res.push(temp);
        heap.dequeue()
    }

    console.log(res);

}

// freq(["the","day","is","sunny","the","the","the","sunny","is","is"]
// , 4);

freq(["i","love","leetcode","i","love","coding"], 2)

function comparator(w1, w2) {
    let k1 = w1.k, k2 = w2.k;
    if(w1.v == w2.v){
        let compare = k1.localeCompare(k2);
        return compare;
    }
    return w2.v - w1.v; 
}




// function sorted(arr) {
//     let a = arr.sort((a,b) => 
//         a.split(' ')[1].localeCompare(b.split(' ')[1])
//     )

//     console.log(a);
// }

// sorted(["vinod vakadu", "abd dev", "marco reus", "richord anthony", "abd dev"]);


// let arr = ["vinod vakadu", "yela nat", "marco reus", "richord anthony", "george king"];
// // let a = arr.map((a) => a.split(' ')[1]).sort(compare)

// function compare(a,b) {
//     return b.length-a.length
// }

// console.log(a);