function twoSum(nums, target) {
    // let result = [0,0];

    // for(let i=0; i<nums.length; i++) {
    //     for(let j=i+1; j<nums.length; j++) {
    //         if(nums[i] + nums[j] === target) {
    //             result[0] = i;
    //             result[1] = j;
    //             break;
    //         }
    //     }
    // }

    // return result;

    let map = new Map();

    for(let i=0; i<nums.length; i++) {
        if(map.has(nums[i])) {
            return [map.get(nums[i]), i]
        }

        let sum = target-nums[i];
        map.set(sum, i);
    }
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
