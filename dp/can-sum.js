function sum(nums, target, memo= {}) {

    if(target in memo) {
        return memo[target]
    }

    if(target === 0) {
        return true;
    }

    if(target < 0) {
        return false;
    }

    for(let num of nums) {
        let temp = target - num;

        if(sum(nums, temp, memo) === true) {
            memo[target] = true;
            return true
        }
    }

    memo[target] = false;
    return false;
}

sum([5,3,4,7], 7);
