function houseRobber(nums) {
    let memo = new Map();
    return helper(nums, 0, memo);
}

function helper(nums, i, memo) {
    if (memo.has(i)) {
        return memo.get(i);
    }

    if (i >= nums.length) {
        return 0;
    }

    const result = Math.max(
        nums[i] + helper(nums, i + 2, memo),
        helper(nums, i + 1, memo)
    );
    memo.set(i, result);
    return result;
}

console.log(houseRobber([1, 2, 3, 1]));
console.log(houseRobber([2, 7, 9, 3, 1]));
