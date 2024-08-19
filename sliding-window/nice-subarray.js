function niceSubarray(nums, k) {
    let result = 0,
        count = 0,
        i = 0,
        j = 0,
        temp = 0;

    while (j < nums.length) {
        if (nums[j] % 2 !== 0) {
            count++;
            temp = 0;
        }

        while (count === k) {
            temp++;
            if (nums[i] % 2 !== 0) {
                count--;
            }
            i++;
        }
        result += temp;

        j++;
    }
    // for (let i = 0; i < nums.length; i++) {
    //     let count = 0;
    //     for (let j = i; j < nums.length; j++) {
    // if (nums[j] % 2 !== 0) {
    //     count++;
    // }

    //         if (count === k) {
    //             result++;
    //         }
    //     }
    // }

    return result;
}

// console.log(niceSubarray([1, 1, 2, 1, 1], 3));
// console.log(niceSubarray([2, 4, 6], 1));
console.log(niceSubarray([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
