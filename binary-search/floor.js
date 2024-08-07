function findFloor(nums, target) {
    let result = -1,
        start = 0,
        end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (target < nums[mid]) {
            end = mid - 1;
        } else {
            result = nums[mid];
            start = mid + 1;
        }
    }

    return result;
}

console.log(findFloor([1, 2, 8, 10, 11, 12, 19], 5));
console.log(findFloor([1, 2, 8, 10, 11, 12, 19], 20));
console.log(findFloor([1, 2, 8, 10, 11, 12, 19], 0));
