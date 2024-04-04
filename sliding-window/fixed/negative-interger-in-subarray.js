function subarray(nums, k) {
    let i=0,j=0, result = [], queue = [];
    
    while(j < nums.length) {
        if(nums[j] < 0) {
            queue.push(nums[j]);
        }
        if(j-i+1 === k) {
            result.push(queue.length > 0 ? queue[0] : 0);
            if(nums[i] === queue[0]) {
                queue.shift();
            }
            i++;
            j++;

            // let found = false;
            // for(let m=i; m<j; m++) {
            //     if(Math.sign(nums[m]) === -1) {
            //         result.push(nums[m]);
            //         found = true;
            //         break;
            //     }
            // }
            // i++;
            // j++;
            // if(!found) {
            //     result.push(0)
            // }
        } else {
            j++;
        }
    }
    console.log(result);

    return result;

}

subarray([-8, 2, 3, -6, 10], 2);
