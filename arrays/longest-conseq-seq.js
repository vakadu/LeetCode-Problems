function seq(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const set = new Set(nums);
    let max = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let curr = num,
                count = 1;

            while (set.has(curr + 1)) {
                curr++;
                count++;
            }

            max = Math.max(max, count);
        }
    }

    // let max = 1,
    // count = 1;

    // nums.sort((a, b) => a - b);
    // for (let i = 1; i <= nums.length; i++) {
    //     if (nums[i] !== nums[i - 1]) {
    //         if (nums[i] === nums[i - 1] + 1) {
    //             count++;
    //         } else {
    //             max = Math.max(max, count);
    //             count = 1;
    //         }
    //     }
    // }

    return max;
}

console.log(seq([100, 4, 200, 1, 3, 2]));
console.log(seq([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(seq([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
