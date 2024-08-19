function binarySubarray(nums, goal) {
    let count = 0,
        i = 0,
        j = 0,
        sum = 0;

    while (j < nums.length) {
        sum += nums[j];

        while (sum > goal) {
            sum -= nums[i];
            i++;
        }

        if (sum === goal) {
            count = count + j - i + 1;
        }

        j++;
    }

    // for (let i = 0; i < nums.length; i++) {
    //     let sum = 0;
    //     for (let j = i; j < nums.length; j++) {
    //         sum += nums[j];

    //         if (sum === goal) {
    //             count++;
    //         }
    //     }
    // }

    return count;
}

console.log(binarySubarray([1, 0, 1, 0, 1], 2));
console.log(binarySubarray([0, 0, 0, 0, 0], 0));
