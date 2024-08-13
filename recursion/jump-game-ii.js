function recursion(nums) {
    return helper(nums, 0, {});
}

function helper(nums, i, memo) {
    if (i in memo) {
        return memo[i];
    }

    if (i >= nums.length - 1) {
        return 0;
    }

    let min = Number.MAX_SAFE_INTEGER;

    for (let j = 1; j <= nums[i]; j++) {
        min = Math.min(min, 1 + helper(nums, i + j, memo));
    }

    memo[i] = min;
    return min;
}

console.log(recursion([2, 3, 1, 1, 4]));
