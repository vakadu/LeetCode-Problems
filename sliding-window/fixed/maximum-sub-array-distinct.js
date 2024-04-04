function maxSubArray(nums, k) {

    let i=0, j=0, sum = 0, max = 0, map = new Map();

    while(j<nums.length) {
        map.set(nums[j], map.get(nums[j]) + 1 || 1);
        sum += nums[j];


        if(j-i+1 === k) {

            const isDuplicate = map.size < k;
            console.log(map);

            if(!isDuplicate) {
                max = Math.max(max, sum);
            }

            if(map.get(nums[i]) <= 1) {
                map.delete(nums[i])
            } else {
                map.set(nums[i], map.get(nums[i]) - 1);
            }

            sum -= nums[i];

            i++;
            j++;
        } else {
            j++;
        }
    }

    console.log(max);




    // let max = 0;

    // for(let i=0; i<=nums.length-k; i++) {
    //     let sum = 0;
    //     console.log(i, k+i);
    //     let temp = nums.slice(i, k+i);
    //     let set = new Set(temp);
    //     console.log(temp, set.size);

    //     for(let j=i; j<k+i && set.size >= k; j++) {
    //         sum += nums[j];
    //     }
    //     max = Math.max(max, sum);
    // }

    // console.log(max);

    // let max = 0, sum = 0;
    // for(let i=0; i<k; i++) {
    //     sum += nums[i];
    //     max = Math.max(max, sum);
    // }
    
    // for(let i=1; i<=nums.length-k; i++) {
    //     sum = sum - nums[i-1] + nums[i+(k-1)];
    //     max = Math.max(max, sum);
    // }
    // return max;

    // let i=0, j=0, max=0, sum = 0;

    // while(j<nums.length) {
    //     sum = sum + nums[j];

    //     if(j-i+1 === k) {
    //         max = Math.max(sum, max);
    //         sum = sum - nums[i];
    //         i++;
    //         j++;
    //     } else {
    //         j++;
    //     }
    // }
    // console.log(max);

    // return max

    

}

maxSubArray([9,9,9,1,2,3], 3);
