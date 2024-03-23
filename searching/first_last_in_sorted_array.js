function findOccurence(arr, target) {
    let result = [-1,-1];
    let start = helper(arr, target, true);
    let end = helper(arr, target, false);

    result[0] = start;
    result[1] = end;

    return result;
}

function helper(nums, target, firstIndex) {
    let start = 0, end = nums.length - 1, ans = -1;

    while(start <= end) {
        let mid = Math.floor(start + (end-start)/2);

        if(target < nums[mid]) {
            end = mid - 1;
        } else if(target > nums[mid]) {
            start = mid + 1;
        } else {
           ans = mid;
            if(firstIndex) {
                end = mid-1;
            } else {
                start = mid + 1;
            }
        }
    }

    return ans;
}

console.log(findOccurence([5,7,7,8,8,10], 8));

