function recursion(target) {
    let nums=[1,4,9,16];
    return helper(nums, target)
}

function helper(nums, t) {
    if(t === 0) {
        return 1
    }

    if(t<0) {
        return 0
    }

    let min = Number.MAX_SAFE_INTEGER;

    for(let num of nums) {
        if(t >= num) {
            min = Math.min(min, helper(nums, t-num))
        }
    }

    return min
}

console.log(recursion(12));
