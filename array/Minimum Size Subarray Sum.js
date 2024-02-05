// https://leetcode.com/problems/minimum-size-subarray-sum/

var minSubArrayLen = function(nums, target) {
    // let i=0, j=0, minLen = Number.MAX_SAFE_INTEGER + 1, fonud = false, sum = nums[0];

    // while(j<nums.length) {

    //     if(sum >= target) {
            
    //         fonud = true;
    //         minLen = Math.min(j-i+1);
    //         sum = sum - nums[i]
    //         i++;
    //     } else {
    //         j++;
    //         sum += nums[j];
    //     }
    // }
    // if(!fonud) return 0;
    // return minLen;
    
};

var minSubArrayLen = function(nums, target) {

    let i=0, j=0, n = nums.length, min = Number.MAX_SAFE_INTEGER + 1, sum=nums[0], found = false;

    while(j<n) {
        if(sum >= target) {
            min = Math.min(min, j-i+1);
            found = true;
            sum = sum - nums[i]
            i++;
        } else {
            j++;
            sum += nums[j];
        }
    }

    console.log(sum, min);

    if(!found) return 0;
    return min;

}

minSubArrayLen([2,3,1,2,4,3], 7);
