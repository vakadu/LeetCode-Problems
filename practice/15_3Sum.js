function sum(nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let start = i + 1,
            end = nums.length - 1;

        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            if (sum === 0) {
                result.push([nums[i], nums[start], nums[end]]);
                while (nums[start] === nums[start + 1]) {
                    start++;
                }
                while (nums[end] === nums[end - 1]) {
                    end--;
                }
                start++;
                end--;
            } else if (sum > 0) {
                end--;
            } else {
                start++;
            }
        }

        // for (let j = i + 1; j < nums.length; j++) {
        //     if (j > i + 1 && nums[j] === nums[j - 1]) {
        //         continue;
        //     }
        //     for (let k = j + 1; k < nums.length; k++) {
        //         if (k > j + 1 && nums[k] === nums[k - 1]) {
        //             continue;
        //         }
        // if (nums[i] + nums[j] + nums[k] === 0) {
        //     result.push([nums[i], nums[j], nums[k]]);
        // }
        //     }
        // }
    }

    return result;
}

// console.log(sum([-1, 0, 1, 2, -1, -4]));
// console.log(sum([0, 0, 0, 0]));
// console.log(sum([-2, 0, 0, 2, 2]));
console.log(sum([-1, 0, 1, 2, -1, -4]));
