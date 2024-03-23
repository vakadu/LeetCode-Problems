function twoSum(nums, target) {
    let start = 0, end = nums.length - 1;

    while(start < end) {
        let sum = nums[start] + nums[end];

        if(target === sum) {
            return [start + 1, end + 1]
        } else if(target < sum) {
            end--;
        } else {
            start++;
        }
    }

    return [-1, -1]



    // let result = [];

    // for(let i=0; i<nums.length; i++) {
    //     for(let j=i+1; j<nums.length; j++) {
    //         if((nums[i] + nums[j]) === target) {
    //             result.push(i+1);
    //             result.push(j+1);
    //         }
    //     }
    // }


    // console.log(result);
}

console.log(twoSum([2,7,11,15], 9));
