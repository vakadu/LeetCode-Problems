function maxSubarray(nums) {
	let max = Number.MIN_SAFE_INTEGER,
		sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];

		max = Math.max(max, sum);

		if (sum <= 0) {
			sum = 0;
		}

		// let sum = 0;

		// for (let j = i; j < nums.length; j++) {
		// 	sum += nums[j];
		// 	max = Math.max(max, sum);
		// }

		// let temp = nums.slice(i);
		// let sum = temp.reduce((acc, curr) => {
		// 	return (acc += curr);
		// });
		// max = Math.max(sum, max);
	}

	return max;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubarray([1]));
// console.log(maxSubarray([5, 4, -1, 7, 8]));
