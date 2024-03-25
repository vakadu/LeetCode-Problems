function peakElement(nums) {
    let start = 0, end = nums.length - 1;

    while(start < end) {
        let mid = Math.floor(start + (end - start)/2);

        if(nums[mid] < nums[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    console.log(start);
}

peakElement([1,2,1,3,5,6,4]);
