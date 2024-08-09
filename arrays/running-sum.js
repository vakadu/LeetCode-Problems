function runningSum(nums) {
    let result = [nums[0]],
        sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        result[i] = sum += nums[i];
    }

    return result;
}

console.log(runningSum([1, 2, 3, 4]));
