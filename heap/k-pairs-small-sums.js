const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

function kPairs(nums1, nums2, k) {
    let heap = new MaxPriorityQueue(), result = [];

    for(let i=0; i<nums1.length; i++) {
        for(let j=0; j<nums2.length; j++) {
            let sum = nums1[i] + nums2[j];
            heap.enqueue({ key: [nums1[i], nums2[j]] }, sum);

            if(heap.size() > k) {
                heap.dequeue()
            }
        }
    }

    while(!heap.isEmpty()) {
        let f1 = heap.dequeue().element.key;
        result.push(f1);
    }

    console.log(result);
}

kPairs([1,1,2], [1,2,3], 2);
