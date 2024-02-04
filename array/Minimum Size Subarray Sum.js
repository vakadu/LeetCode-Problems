// https://leetcode.com/problems/minimum-size-subarray-sum/

var minSubArrayLen = function(nums, target) {
    let i=0, j=0, minLen = Number.MAX_SAFE_INTEGER + 1, fonud = false, sum = nums[0];

    while(j<nums.length) {

        if(sum >= target) {
            
            fonud = true;
            minLen = Math.min(j-i+1);
            sum = sum - nums[i]
            i++;
        } else {
            j++;
            sum += nums[j];
        }
    }
    if(!fonud) return 0;
    return minLen;
    
};

minSubArrayLen([2,3,1,2,4,3], 7);
