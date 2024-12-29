function permutaions(nums) {
    let result = [];
    helper(nums, [], result);
    return result;
}

function helper(nums, temp, result) {
    if (nums.length <= 0) {
        result.push([...temp]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        let remaining = nums.slice(0, i).concat(nums.slice(i + 1));
        temp.push(nums[i]);
        helper(remaining, temp, result);
        temp.pop();
    }
}

console.log(permutaions([1, 2, 3]));
