function sum3(nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let start = i + 1,
            end = nums.length - 1;

        while (start < end) {
            const sum = nums[i] + nums[start] + nums[end];
            if (sum === 0) {
                result.push([nums[i], nums[start], nums[end]]);
                while (start < end && nums[start] === nums[start + 1]) {
                    start++;
                }
                while (start < end && nums[end] === nums[end - 1]) {
                    end--;
                }
                start++;
                end--;
            } else if (sum < 0) {
                start++;
            } else {
                end--;
            }
        }

        // for (let j = i + 1; j < nums.length; j++) {
        //     for (let k = j + 1; k < nums.length; k++) {
        //         if (nums[i] + nums[j] + nums[k] === 0) {
        //             result.push([nums[i], nums[j], nums[k]]);
        //         }
        //     }
        // }
    }

    return result;
}

console.log(sum3([-1, 0, 1, 2, -1, -4]));
console.log(sum3([0, 1, 1]));
console.log(sum3([0, 0, 0]));
console.log(sum3([0, 0, 0, 0]));
console.log(sum3([-2, 0, 0, 2, 2]));
