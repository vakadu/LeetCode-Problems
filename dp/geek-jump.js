function geekJump(height) {
    return helper(height, 0);
}

function helper(nums, i) {
    if (i >= nums.length - 1) {
        return 0;
    }

    let jumpOne = Math.abs(nums[i] - nums[i + 1]) + helper(nums, i + 1);

    let jumpTwo = Number.MAX_SAFE_INTEGER;
    if (i + 2 < nums.length) {
        jumpTwo = Math.abs(nums[i] - nums[i + 2]) + helper(nums, i + 2);
    }

    return Math.min(jumpOne, jumpTwo);
}

console.log(geekJump([10, 20, 30, 10]));
