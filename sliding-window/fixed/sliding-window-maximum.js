function maximum(nums, k) {
    let i=0, j=0, result = [], queue = [];

    while(j<nums.length) {

        while(nums[j] > queue[queue.length - 1]) {
            queue.pop();
        }

        queue.push(nums[j]);

        if(j-i+1 === k) {

            // let temp = nums.slice(i, j+1);
            // console.log(temp);
            // max = Math.max(...temp);

            result.push(queue[0]);
            if(queue[0] === nums[i]) {
                queue.shift();
            }

            i++;
            j++;
        } else {
            j++;
        }
    }

    console.log(result);
}

maximum([1,3,-1,-3,5,3,6,7], 3)
