// https://leetcode.com/problems/maximum-subarray/description/

var maxSubArray = function(nums) {
    let sum = 0, max =nums[0], n = nums.length, i=0;

    while(i<n) {
        sum += nums[i];
        console.log(sum);
        max = Math.max(max, sum);

        if(sum < 0) {
            sum = 0
        }
        i++;
    }
    console.log(sum, max);


    // let i=0, j=0, max = nums[0], n=nums.length;

    // while(i<n) {
    //     j = i;
    //     let sum = 0;
    //     while(j<n) {
    //         sum += nums[j];
    //         max = Math.max(sum, max)
    //         j++;
    //     }
    //     i++;
    // }
    // console.log(max);
};

maxSubArray([-1]);
