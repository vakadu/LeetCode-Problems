function maxProduct(nums) {
    let max = 1,
        curr = 1;

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] > 0) {
            curr *= nums[index];
            max = Math.max(curr, max);
        } else {
            curr = 1;
        }
    }
    // for (let i = 0; i < nums.length; i++) {
    //     let product = nums[i];
    //     max = Math.max(product, max);

    //     for (let j = i + 1; j < nums.length; j++) {
    //         product = product * nums[j];
    //         max = Math.max(product, max);
    //     }
    // }

    return max;
}

console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-3, 0, 1, -2]));
