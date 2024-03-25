function minSortedArray(nums) {

    const peak = findPeak(nums);
    if(peak === -1) {
        return nums[0];
    }

    return nums[peak + 1];
}

function findPeak(nums) {
    let start = 0, end = nums.length - 1;

    while(start <= end) {
        let mid = Math.floor(start + (end-start)/2);
        console.log(mid, start, end);

        if(nums[mid] > nums[mid+1]){
            return mid;
        }

        if(nums[mid] < nums[mid-1]) {
            return mid-1;
        }

        if(nums[mid] <= nums[start]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}

console.log(minSortedArray([5,1,2,3,4]));
