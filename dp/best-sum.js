function bestSum(nums, target, memo = {}) {
    if(target in memo) {
        return memo[target]
    }
    if(target < 0) {
        return null;
    }

    if(target === 0) {
        return [];
    }
    console.log(memo);

    let shortComb = null;
    for(let num of nums) {
        let remainder = target - num;
        let result = bestSum(nums, remainder, memo);

        if(result && result !== null) {
            const combination = [...result, num];

            if(shortComb === null || combination.length < shortComb.length) {
                shortComb = combination;
            }
        }
    }

    memo[target] = shortComb
    return memo[target];
}

console.log(bestSum([2,3], 8));
