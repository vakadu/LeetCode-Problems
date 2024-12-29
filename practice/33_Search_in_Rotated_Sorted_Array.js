function rotated(nums, target) {
    if (nums.length <= 1) {
        if (nums[0] === target) {
            return 0;
        } else {
            return -1;
        }
    }
    const peak = findPeak(nums);

    if (peak !== -1) {
        const left = bs(nums, target, 0, peak);
        const right = bs(nums, target, peak + 1, nums.length - 1);

        return left === -1 ? right : left;
    }
    return -1;
}

function bs(nums, target, start, end) {
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

function findPeak(nums) {
    let start = 0,
        end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        // Check if mid is the peak
        if (mid > 0 && nums[mid] < nums[mid - 1]) {
            return mid - 1; // Peak found, return its index
        } else if (mid === 0 && nums[mid] < nums[mid + 1]) {
            return mid; // Peak is at index 0
        } else if (nums[mid] >= nums[start]) {
            // Left side is sorted, search the right side
            start = mid + 1;
        } else {
            // Right side is sorted, search the left side
            end = mid - 1;
        }
    }

    return -1; // No peak found, array is not rotated
}

// console.log(rotated([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(rotated([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(rotated([1], 0));
// console.log(rotated([1], 1));
// console.log(rotated([1, 3], 1));
// console.log(rotated([3, 1], 1));
console.log(rotated([1, 3, 5], 1));
