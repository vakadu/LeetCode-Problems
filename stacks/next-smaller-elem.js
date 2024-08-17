function nearestSmaller(nums) {
    let result = [],
        stack = [];

    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0) {
            result.push(-1);
        } else if (stack.length > 0 && nums[i] > stack[0]) {
            result.push(stack[0]);
        } else if (stack.length > 0 && nums[i] < stack[0]) {
            while (nums[i] < stack[0]) {
                stack.shift();
            }
            if (stack.length === 0) {
                result.push(-1);
            } else {
                result.push(stack[0]);
            }
        }

        stack.unshift(nums[i]);
    }

    return result;
}

console.log(nearestSmaller([4, 5, 2, 10, 8]));
console.log(nearestSmaller([3, 2, 1]));
