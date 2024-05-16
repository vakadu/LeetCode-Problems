function howSum(nums, target, memo = {}) {
    if(target in memo) {
        return memo[target]
    }
    if(target < 0) return null;
    if(target === 0) return [];

    for(let num of nums) {
        let remainder = target - num;
        let result = howSum(nums, remainder, memo);
        console.log(result, memo);

        if(result && result !== null) {
            memo[target] = [...result, num];
            return memo[target]
        }
    }

    memo[target] = null;
    return null;
}

console.log(howSum([2,3], 7));
