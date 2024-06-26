function sum(nums, target) {
    nums.sort((a,b) => a-b)
    let result = 0, max = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === nums[i-1]) {
            continue;
        }
        let s = i+1, e=nums.length-1;
        while(s<e) {
            let sum = nums[i]+nums[s]+nums[e];
            let diff = Math.abs(target-sum);
            if(diff < max) {
                result = sum;
                max = diff
            }

            if(target > sum) {
                s++;
            } else {
                e--;
            }
        }
    }
    return result
}

console.log(sum([-1,2,1,-4], 1));
console.log(sum([0,0,0], 1));
