function sum(nums) {
    nums.sort((a,b) => a-b)
    let result = [], map = new Map();
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === nums[i-1]) {
            continue;
        }
        let s = i+1, e=nums.length-1;
        while(s<e) {
            let sum = nums[i]+nums[s]+nums[e];
            if(sum === 0) {
                result.push([nums[i],nums[s],nums[e]]);
                s++;
                e--;

                while(nums[s] === nums[s-1]) {
                    s++;
                }
                while(nums[e] === nums[e+1]) {
                    e--;
                }
            } else if(sum < 0) {
                s++;
            } else {
                e--;
            }
        }
    }
    return result
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

// console.log(sum([-1,0,1,2,-1,-4]));
console.log(sum([-2,0,0,2,2]));
// console.log(sum([0,1,1]));
// console.log(sum([0,0,0]));
console.log(sum([-2,0,1,1,2]));
