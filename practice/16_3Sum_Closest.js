function closest(nums, target) {
    nums.sort((a, b) => a - b);
    let min = Number.MAX_SAFE_INTEGER,
        result = min;
    for (let i = 0; i < nums.length; i++) {
        let start = i + 1,
            end = nums.length - 1;

        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            let abs = Math.abs(target - sum);
            if (abs < min) {
                min = Math.min(min, abs);
                result = sum;
            }
            if (sum < target) {
                start++;
            } else {
                end--;
            }
        }
    }

    return result;
}

// console.log(closest([-1, 2, 1, -4], 1));
console.log(closest([0, 0, 0], 1));
