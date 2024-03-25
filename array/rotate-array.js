function rotateArray(nums, k) {

    console.log(k%nums.length);
    // for(let i=0; i<k; i++) {
    //     nums.unshift(nums.pop())
    // }
    // console.log(nums);

    // let n = nums.length, start = n-k;
    // let right = nums.slice(start, nums.length);
    // let left = nums.slice(0, start);

    // return [...right, ...left];
    k%=nums.length;

    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1);

    return nums;
}

function reverse(nums, start, end) {

    while(start <= end) {
        // let temp = nums[start];
        // nums[start] = nums[end];
        // nums[end] = temp;
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++;
        end--;
    }
}

console.log(rotateArray([-1], 2));
