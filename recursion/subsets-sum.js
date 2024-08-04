function recursion(nums) {
    return helper(nums, [])
}

function helper(nums, arr) {
    if(nums <= 0) {
        const sum = arr.reduce((acc, curr) => {
            return acc += curr;
        }, 0);
        return [sum];
    }

    const first = nums[0];
    let left = helper(nums.slice(1), arr.concat(first));
    let right = helper(nums.slice(1), arr);

    return [...left, ...right]
}

console.log(recursion([2,3]));
console.log(recursion([5,2,1]));
