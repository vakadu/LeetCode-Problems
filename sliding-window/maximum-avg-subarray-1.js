// function maximum(nums, k) {
//     let i=0, j=0, max=0, sum=0;

//     while(j<nums.length) {
//         sum += nums[j];

//         if(j-i+1 === k) {
//             let temp = sum/k;
//             max = Math.max(sum, temp)

//             sum = sum - nums[i];

//             i++;
//             j++;
//         } else {
//             j++;
//         }
//     }
//     console.log(max);

//     return max
// }

// maximum([-1], 1);


