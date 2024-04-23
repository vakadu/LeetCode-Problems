function largest(nums) {
    let result = [], stack = [];

    // for(let i=0; i<nums.length; i++) {
    //     for(let j=i+1; j<nums.length; j++) {
    //         if(nums[i] < nums[j]) {
    //             console.log(nums[j]);
    //             result.push(nums[j]);
    //             break;
    //         } else {
    //             result.push(-1);
    //         }
    //     }
    // }

    // console.log(result);

    for(let i=nums.length-1; i>=0; i--) {

        console.log(stack);

        if(stack.length === 0) {
            result.push(-1);
        } else if(stack.length > 0 && stack[0] > nums[i]) {
            result.push(stack[0])
        } else if(stack.length > 0 && stack[0] < nums[i]) {
            console.log("ghjkm");
            while(stack[0] < nums[i]) {
                stack.pop();
            }

            if(stack.length > 0) {
                result.push(stack[0])
            } else {
                result.push(-1);
            }
        }

        stack.unshift(nums[i]);


    }

    console.log(result.reverse());
}

largest([5,7,1,2,6,0]);
