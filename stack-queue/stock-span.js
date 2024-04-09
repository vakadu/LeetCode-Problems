function stockSpan(nums) {
    let stack = [], result = [];
    for(let i=0; i<nums.length; i++) {
        if(stack.length === 0) {
            result.push(-1);
        } else if(stack.length > 0 && stack[0].el > nums[i]) {
            result.push(stack[0].i);
        } else if(stack.length > 0 && stack[0].el < nums[i]) {
            while(stack[0].el < nums[i]) {
                stack.shift();
            }

            if(stack.length === 0) {
                result.push(-1);
            } else {
                result.push(stack[0].i);
            }
        }

        stack.unshift({el: nums[i], i});
    }

    for(let i=0; i<result.length; i++) {
        result[i] = i-result[i];
    }

    console.log(result, stack);
}

stockSpan([100, 80, 60, 70, 60, 75, 85]);
