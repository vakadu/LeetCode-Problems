function rotatedArray(nums, target) {
    const index = findPeakIndex(nums);

    let left = bs(nums, target, 0, index);
    let right = bs(nums, target, index + 1, nums.length - 1);

    return left !== -1 ? left : right;
}

function findPeakIndex(nums) {
    let start = 0,
        end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (mid > 0 && nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid;
        } else if (mid === 0 && nums[mid] > nums[mid + 1]) {
            return mid;
        } else if (nums[mid] < nums[mid + 1] && nums[mid] < nums[start]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}

function bs(nums, target, start, end) {
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

// console.log(rotatedArray([5, 6, 7, 0, 1, 2, 3], 0));
// console.log(rotatedArray([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(rotatedArray([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(rotatedArray([1], 0));
console.log(rotatedArray([3, 1], 1));
