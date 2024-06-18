function combinationsum(nums, target) {
    return helper(nums, target);
}

function helper(nums, t) {
    if(t === 0) {
        return 1
    }

    if(t<0) {
        return 0
    }

    let totalCount = 0;

    for(let num of nums) {
        if(num <= t) {
            totalCount += helper(nums, t-num)
        }
    }

    return totalCount
    console.log(totalCount);
}

console.log(combinationsum([1,2,3], 4));
