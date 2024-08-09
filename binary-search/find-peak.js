function findPeak(nums) {
    if (nums.length <= 1) {
        return nums[0];
    }
    let start = 0,
        end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (mid > 0 && nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            return nums[mid + 1];
        } else if (mid === 0 && nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        } else if (nums[mid] < nums[mid + 1] && nums[mid] < nums[start]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return nums.indexOf(Math.max(...nums));
}

console.log(findPeak([3, 2, 1]));
