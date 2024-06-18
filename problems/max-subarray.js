function maxSubarray(nums, target) {
    let i=0, j=0, min = Number.MAX_SAFE_INTEGER, sum=nums[0];

    while(j<nums.length) {
        if(sum >= target) {
            min = Math.min(min, j-i+1);

            sum-=nums[i];
            i++;
        } else {
            j++;

            sum+=nums[j];
        }
    }

    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
}

console.log(maxSubarray([2,3,1,2,4,3], 7));
// console.log(maxSubarray([1,4,4], 4));
// console.log(maxSubarray([1,1,1,1,1,1,1,1], 11));
