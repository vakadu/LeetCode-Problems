function partion(nums, target) {
    return subsetSum(nums, target, 0);
}

function subsetSum(nums, target, i, memo = {}) {
    const key = `${i}-${target}`;
    if (key in memo) {
        return memo[key];
    }

    if (target === 0) {
        return 1;
    }

    if (i > nums.length) {
        return 0;
    }

    if (target >= nums[i]) {
        memo[key] =
            subsetSum(nums, target - nums[i], i + 1, memo) +
            subsetSum(nums, target, i + 1, memo);
    } else {
        memo[key] = subsetSum(nums, target, i + 1, memo);
    }

    return memo[key];
}

console.log(partion([5, 2, 3, 10, 6, 8], 10));
console.log(partion([2, 5, 1, 4, 3], 10));
