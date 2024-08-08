function searchRange(nums, target) {
    let left = bs(nums, target, true);
    let right = bs(nums, target, false);

    return [left, right];
}

function bs(nums, target, isFirst) {
    let start = 0,
        end = nums.length - 1,
        result = -1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] === target) {
            result = mid;
            if (isFirst) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return result;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
