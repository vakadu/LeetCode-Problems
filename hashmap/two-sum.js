function twoSum(nums, target) {
    let map = new Map();

    for(let i=0; i<nums.length; i++) {
        let sum = target - nums[i];

        if(map.has(nums[i])) {
            return [map.get(nums[i]), i]
        }

        map.set(sum, i);
    }
    console.log(map);




    // let i=0, j=i+1;

    // while(i <= nums.length-1) {
    //     let sum = nums[i] + nums[j];

    //     if(target === sum) {
    //         return [i, j]
    //     } else if(j === nums.length-1) {
    //         i++;
    //         j = i + 1;
    //     } else {
    //         j++;
    //     }
    // }
}

console.log(twoSum([3,2,3], 6));
