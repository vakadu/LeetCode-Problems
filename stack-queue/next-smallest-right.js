function smallest(nums) {
    let stack = [], result = [];

    for(let i=nums.length-1; i>= 0; i--) {
        if(stack.length === 0) {
            result.push(-1);
        } else if(stack.length > 0 && stack[0] > nums[i]) {
            while(stack[0] > nums[i]) {
                stack.shift();
            }
            if(stack.length === 0) {
                result.push(-1)
            } else {
                result.push(stack[0]);
            }
        } else {
            result.push(stack[0]);
        }

        stack.push(nums[i]);
    }

    console.log(result);
}

smallest([4,5,2,10,8]);
