function sum(nums, target) {
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            let sum = nums[i] + nums[j];
            if(sum === target) {
                return [i,j]
            }
        }
    }
}

function optimize(nums, target) {
    let map = new Map();
    for(let i=0; i<nums.length; i++) {

        if(map.has(nums[i])) {
            return [map.get(nums[i]), i]
        }
        map.set(target-nums[i], i);

    }
}

// console.log(sum([2,7,11,15], 9)); //[0,1]
console.log(optimize([2,7,11,15], 9));
console.log(optimize([3,2,4], 6)); //[0,1]
