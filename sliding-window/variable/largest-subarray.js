function largestSubArray(nums, k) {
    let i=0, j=0, sum=0, count=0;

    if(k === 0) {
        return 0
    }

    while(j<nums.length) {
        sum += nums[j];

        if(sum === k) {
            count++;
            j++;
        } else if(sum > k) {
            while(sum > k) {
                sum -= nums[i];
                i++;
            }
            if(sum === k) {
                count++;
            }
            j++;
        } else {
            j++;
        }
    }

    console.log(count);
}

largestSubArray([1,1,1], 2);
