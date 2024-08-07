function bs(nums, target) {
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === target) {
    //         return i;
    //     }
    // }

    // return -1;

    let start = 0,
        end = nums.length - 1;

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

// console.log(bs([-1, 0, 3, 5, 9, 12], 9));
console.log(bs([5], 5));
