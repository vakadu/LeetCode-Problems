function sum(nums) {
    nums.sort((a,b) => a-b)
    let result = [], map = new Map();
    console.log(nums);
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {

        }
    }
    // for(let i=0; i<nums.length; i++) {
    //     for(let j=i+1; j<nums.length; j++) {
    //         for(let k=j+1; k<nums.length; k++) {
    //             if(nums[i] + nums[j] + nums[k] === 0) {
    //                 let key = `${nums[i]}${nums[j]}${nums[k]}`;
    //                 if(!map.get(key)) {
    //                     map.set(key, [nums[i], nums[j], nums[k]])
    //                 }
    //             }
    //         }
    //     }
    // }

    // for(let [key, val] of map) {
    //     result.push(val);
    // }

    // return result
}

console.log(sum([-1,0,1,2,-1,-4]));
console.log(sum([0,1,1]));
console.log(sum([0,0,0]));
