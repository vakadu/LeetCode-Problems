function sum(nums, target) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            let start = j + 1,
                end = nums.length - 1;

            while (start < end) {
                const sum = nums[i] + nums[j] + nums[start] + nums[end];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[start], nums[end]]);
                    while (nums[start] === nums[start + 1]) {
                        start++;
                    }
                    while (nums[end] === nums[end - 1]) {
                        end--;
                    }
                    start++;
                    end--;
                } else if (sum < target) {
                    start++;
                } else {
                    end--;
                }
            }
        }
    }

    return result;
}

console.log(sum([1, 0, -1, 0, -2, 2], 0));
