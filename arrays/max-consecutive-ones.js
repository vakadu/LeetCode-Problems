function maxOnes(nums) {
    let max = Number.MIN_SAFE_INTEGER, count = 0;

    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 1) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 0;
        }
    }

    return max === Number.MIN_SAFE_INTEGER ? 0 : max;
}

console.log(maxOnes([1,1,0,1,1,1]));
console.log(maxOnes([1,0,1,1,0,1]));
