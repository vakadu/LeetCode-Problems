function jumpGame(nums){
    return helper(nums, 0)
}

function helper(nums, n) {
    if(n === nums.length) {
        return 0
    }
    let min = Number.MAX_SAFE_INTEGER;

    for(let i=1; i<=nums[n]; i++) {
        min = Math.min(min, 1+helper(nums, n+i))
    }

    return min;
}

function dphelper(nums, n, memo={}) {
    if(n in memo) {
        return memo[n]
    }

    if(n === nums.length-1) {
        return 0
    }
    let min = Number.MAX_SAFE_INTEGER;

    for(let i=1; i<=nums[n]; i++) {
        min = Math.min(min, 1+dphelper(nums, n+i,memo))
    }

    memo[n] = min;
    return min;
}

console.log(dp([2,3,1,1,4]));//2
