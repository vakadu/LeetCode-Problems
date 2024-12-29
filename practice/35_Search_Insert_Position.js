function searchInsert(nums, target) {
    let start = 0,
        end = nums.length - 1,
        result = 0;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            result = mid + 1;
            start = mid + 1;
        } else {
            result = mid;
            end = mid - 1;
        }
    }

    return result;
}

// console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
