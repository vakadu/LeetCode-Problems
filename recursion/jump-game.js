function jumpGame(nums) {
    return helper(nums, 0, {});
}

function helper(nums, i, memo) {
    if (i in memo) {
        return memo[i];
    }

    if (i <= nums.length) {
        return true;
    }

    for (let j = 1; j < nums[i]; j++) {
        if (helper(nums, i + j)) {
            memo[i] = true;
            return true;
        }
    }

    memo[i] = false;
    return false;
}

console.log(jumpGame([2, 3, 1, 1, 4]));
