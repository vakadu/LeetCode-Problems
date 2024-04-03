function plusOne(nums) {
    let n=nums.length;
    for(let i=n-1; i>=0; i--) {
        if(nums[i] < 9) {
            nums[i]++;
            console.log(nums);
            return nums
        } else {
            nums[i] = 0;
        }
    }
    nums.unshift(1);
    console.log(nums);
}

plusOne([1,0,9])
