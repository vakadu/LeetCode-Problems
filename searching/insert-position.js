function insertPosition(nums, target) {
    let start = 0, end = nums.length - 1;

    while(start <= end) {
        let mid = Math.floor(start + (end-start)/2);

        if(nums[mid] === target) {
            return mid;
        }

        if(target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return start;
}

console.log(insertPosition([1,3,5,6], 7));
