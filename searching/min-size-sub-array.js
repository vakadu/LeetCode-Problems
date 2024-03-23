function minzSubArray(nums, target) {

    let i=0, j=0, min = Number.MAX_SAFE_INTEGER, n=nums.length, sum = nums[0];

    while(j<n) {
        if(sum >= target) {
            min = Math.min(min, j-i+1);
            sum = sum - nums[i];
            i++;
        } else {
            j++;
            sum += nums[j];
        }
    }

    console.log(min);

}

console.log(minzSubArray([2,3,1,2,4,3], 7));
