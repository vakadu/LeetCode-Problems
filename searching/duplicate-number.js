function duplicateNumber(nums) {
    let set = new Set();

    for(let i=0; i<nums.length; i++) {
        if(set.has(nums[i])) {
            return nums[i]
        }
        set.add(nums[i]);
    }
}

console.log(duplicateNumber([3,1,3,4,2]));
