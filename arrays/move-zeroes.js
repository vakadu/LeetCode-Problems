function moveZeroes(nums) {
    // let result = [];

    // for(let i=0; i<nums.length; i++) {
    //     if(nums[i] !== 0){
    //         result.push(nums[i])
    //     }
    // }

    // for(let i=result.length; i<nums.length; i++) {
    //     result.push(0)
    // }

    // return result;

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[count]] = [nums[count], nums[i]];
            count++;
        }
    }
    return nums;
}

console.log(moveZeroes([0,1,0,3,12]));
