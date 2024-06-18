function recursion(nums) {
    let sum = nums.reduce((acc, cur) => {
        return acc+=cur
    },0);


    let help = helper(nums, Math.floor(sum/2), 0);
        if(help) {
            return  Math.floor(sum/2);
        } else {
            return 0
        }
}

function helper(nums, t, n) {
    if(t === 0) {
        return true;
    }

    if(n>nums.length || t<0) {
        return false;
    }

    if(t>=nums[n]) {
        return helper(nums, t-nums[n], n+1) || helper(nums, t, n+1)
    } else {
        return helper(nums, t, n+1)
    }
}

console.log(recursion([1,2,3,4,5,6]));
