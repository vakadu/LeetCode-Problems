function left(nums) {
    let stack = [], result = [];

    for(let i=0; i<nums.length; i++) {
        if(stack.length === 0) {
            result.push(-1);
        } else if(stack.length > 0 && stack[0] < nums[i]) {
            while(stack[0]<nums[i]) {
                stack.shift();
            }

            if(stack.length === 0) {
                result.push(-1)
            } else {
                result.push(stack[0])
            }
        } else if(stack.length > 0 && stack[0] > nums[i]) {
            result.push(stack[0])
        }

        stack.unshift(nums[i]);
    }

    console.log(result);
}

left([1,3,2,4]);
