function maxConsecutive(nums, k) {
    let i = 0,
        j = 0,
        max = Number.MIN_SAFE_INTEGER,
        zeroes = 0;

    while (j < nums.length) {
        if (nums[j] === 0) {
            zeroes++;
        }

        if (zeroes > k) {
            if (nums[i] === 0) {
                zeroes--;
            }
            i++;
        } else {
            max = Math.max(max, j - i + 1);
        }

        j++;
    }

    return max === Number.MIN_SAFE_INTEGER ? 0 : max;
}

console.log(maxConsecutive([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(
    maxConsecutive([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
console.log(maxConsecutive([0, 0, 0, 0], 0));
