function findTheMaxSum(nums, target) {
    let n=nums.length, sum=0, maxSum = 0, i=0;

    // while(i<=(n-target)) {
    //     let j=i, sum=0;

    //     while(j<i+target) {
    //         sum += nums[j];
    //         j++;

    //     }
    //     maxSum = Math.max(sum, maxSum);
    //     i++;
    // }
    // return maxSum;

    while(i<target) {
        sum += nums[i]
        i++;
    }

    i=target;
    maxSum = sum;
    while(i<n) {
        sum += nums[i] - nums[i-target];
        if(sum > maxSum) {
            sum = maxSum
        }
        i++;
    }

    console.log(maxSum);
}

findTheMaxSum([2, 4, 6, 1, -2, 9, 0], 3);
