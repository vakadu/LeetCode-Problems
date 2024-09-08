function partion(nums) {
    const sum = nums.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    if (sum % 2 === 0) {
        const isPartion = subsetSum(nums, sum / 2, 0);
        if (isPartion) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function subsetSum(nums, target, i, memo = {}) {
    const key = `${i}-${target}`;
    if (key in memo) {
        return memo[key];
    }

    if (target === 0) {
        return true;
    }

    if (i > nums.length) {
        return false;
    }

    if (target >= nums[i]) {
        memo[key] =
            subsetSum(nums, target - nums[i], i + 1, memo) ||
            subsetSum(nums, target, i + 1, memo);
    } else {
        memo[key] = subsetSum(nums, target, i + 1, memo);
    }

    return memo[key];
}

console.log(partion([1, 5, 11, 5]));
console.log(partion([1, 2, 3, 5]));
