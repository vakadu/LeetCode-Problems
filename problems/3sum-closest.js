function sumClose(nums, target) {
	nums.sort((a, b) => a - b), (result = []);
	for (let i = 0; i < nums.length; i++) {
		let s = i + 1,
			e = nums.length - 1;
		while (s < e) {
			let sum = nums[i] + nums[s] + nums[e];
			console.log(sum);
			result.push(sum);
			if (sum < target) {
				s++;
			} else {
				e--;
			}
		}
	}

	return findClosest(result, target);
}

function findClosest(arr, target) {
	return arr.reduce((prev, curr) => {
		return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev;
	});
}

console.log(sumClose([-1, 2, 1, -4], 1));
console.log(sumClose([0, 0, 0], 1));
