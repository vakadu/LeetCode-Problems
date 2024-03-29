function intersectionArray(nums1, nums2) {

    let map = new Map(), result = [];
    for(let num of nums1) {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1);
        }
    }

    for(let num of nums2) {
        if(map.has(num)) {
            if(map.get(num) > 0) {
                result.push(num);
                map.set(num, map.get(num) - 1)
            }
        }
    }

    console.log(map, result);
}

intersectionArray([1,2,2,1], [2,2]);
