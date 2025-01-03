function jumpGame(nums) {
    // return helper(nums, 0, {});

    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        let temp = i + nums[i];
        max = Math.max(max, temp);

        if (max >= nums.length - 1) {
            return true;
        }
    }

    return false;
}

function helper(nums, i, memo) {
    if (i in memo) {
        return memo[i];
    }

    if (i >= nums.length - 1) {
        return true;
    }

    for (let j = 1; j <= nums[i]; j++) {
        if (helper(nums, j + i, memo)) {
            memo[i] = true;
            return true;
        }
    }

    memo[i] = false;
    return false;
}

// console.log(jumpGame([2, 3, 1, 1, 4]));
console.log(jumpGame([3, 2, 1, 0, 4]));
