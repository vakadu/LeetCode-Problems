function houseRobber(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 0) return 0;
    let left = helper(nums, 0, nums.length - 1);
    let right = helper(nums, 1, nums.length);

    return Math.max(left, right);
}

function helper(nums, i, end) {
    if (i >= end) {
        return 0;
    }

    const result = Math.max(
        nums[i] + helper(nums, i + 2, end),
        helper(nums, i + 1, end)
    );
    return result;
}

console.log(houseRobber([2, 3, 2]));
console.log(houseRobber([1, 2, 3, 1]));
console.log(houseRobber([1, 2, 3]));
