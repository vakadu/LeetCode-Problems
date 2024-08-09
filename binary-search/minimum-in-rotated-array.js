function findPeak(nums) {
    if (nums.length <= 1) {
        return nums[0];
    }
    let start = 0,
        end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        console.log(mid);

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

    return nums[0];
}

// console.log(findPeak([3, 4, 5, 1, 2]));
// console.log(findPeak([4, 5, 6, 7, 0, 1, 2]));
// console.log(findPeak([11, 13, 15, 17]));
// console.log(findPeak([2, 1]));
// console.log(findPeak([2, 3, 4, 5, 1]));
// console.log(findPeak([4, 5, 1, 2, 3]));
console.log(findPeak([3, 2, 1]));
