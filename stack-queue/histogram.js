function histogram(heights) {
    let right = nsr(heights), left = nsl(heights), area = widthArea(heights, left, right), max = 0;

    // for(let i=0; i<heights.length; i++) {
    //     let temp = heights[i] * area[i];
    //     max = Math.max(max, temp);
    // }

    for (let i = 0; i < heights.length; i++) {
        max = Math.max(max, heights[i] * (right[i] - left[i] - 1));
    }
    console.log(max, right, left, area);

    return max
}

function nsr(nums) {
    let stack = [], result = [];

    for(let i=nums.length-1; i>=0; i--) {
        if(stack.length === 0) {
            result.push(nums.length);
        } else if(stack.length > 0 && stack[0].el > nums[i]) {
            while(stack[0]?.el > nums[i]) {
                stack.shift();
            }

            if(stack.length === 0) {
                result.push(nums.length);
            } else {
                result.push(stack[0].i)
            }
        } else {
            result.push(stack[0].i)
        }

        stack.unshift({ el: nums[i], i });
    }

    return result.reverse();
}

function nsl(nums) {
    let stack = [], result = [];

    for(let i=0; i<nums.length; i++) {
        if(stack.length === 0) {
            result.push(-1);
        } else if(stack.length > 0 && stack[0].el > nums[i]) {
            while(stack[0]?.el > nums[i]) {
                stack.shift();
            }
            if(stack.length === 0) {
                result.push(-1);
            } else {
                result.push(stack[0].i)
            }
        } else {
            result.push(stack[0].i)
        }

        stack.unshift({ el: nums[i], i });
    }

    return result;
}

function widthArea(nums, l, r) {
    let result = [];
    for(let i=0; i<nums.length; i++) {
        let temp = r[i] - l[i] - 1;
        result.push(temp);
    }

    return result;
}

histogram([1,1]);
