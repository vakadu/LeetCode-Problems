function subArray(nums, k) {
    // let count = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     let sum = 0;
    //     for (let j = i; j < nums.length; j++) {
    //         sum += nums[j];

    //         if (sum === k) {
    //             count++;
    //         }
    //     }
    // }

    let count = 0,
        sum = 0,
        map = new Map();

    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
        console.log(map);
    }

    return count;
}

// console.log(subArray([1, 1, 1], 2));
console.log(subArray([1, 2, 3], 3));
// console.log(subArray([1], 0));
