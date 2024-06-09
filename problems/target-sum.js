function recursion(nums, target) {
    let sum = nums.reduce((acc, curr) => {
        return acc + curr
    } ,0);

    if((sum-target) < 0) {
        return 0
    } else if((sum-target)%2 !== 0) {
        return 0
    }

    return helper(nums, (sum-target)/2, 0)
}

function helper(nums, target, n) {
    if(n >= nums.length-1) {
        if(target === 0) {
            return 1;
        }
    }

    if(target <0) {
        return 0
    }
    let diff = target - nums[n];

    return helper(nums, diff, n+1) + helper(nums, target, n+1)
}

console.log(recursion([1,1,1,1,1], 3));
console.log(recursion([1], 1));
console.log(recursion([1,0], 1));
