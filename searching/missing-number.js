function missingNumber(nums) {

    let set = new Set();

    for(let i=0; i<nums.length; i++) {
        set.add(nums[i]);
    }

    for(let i=0; i<nums.length; i++) {
        if(!set.has(i)) {
            return i;
        }
    }

    return nums.length
}

console.log(missingNumber([0,1]));
