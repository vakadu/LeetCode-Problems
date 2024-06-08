function foursum(nums, target) {
	nums.sort((a, b) => a - b);
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		if (i > 0) {
			if (nums[i] === nums[i - 1]) {
				continue;
			}
		}
		for (let j = i + 1; j < nums.length; j++) {
			if (j > i + 1) {
				if (nums[j] === nums[j - 1]) {
					continue;
				}
			}
			let s = j + 1,
				e = nums.length - 1;
			while (s < e) {
				let sum = nums[i] + nums[j] + nums[s] + nums[e];
				if (target === sum) {
					result.push([nums[i], nums[j], nums[s], nums[e]]);
					s++;
					e--;
					while (s < e && nums[s] === nums[s - 1]) {
						s++;
					}
					while (s < e && nums[e] === nums[e + 1]) {
						e--;
					}
				} else if (target > sum) {
					s++;
				} else {
					e--;
				}
			}
		}
	}
	console.log(result);
	return result;
}

console.log(foursum([1, 0, -1, 0, -2, 2], 0));
console.log(foursum([2, 2, 2, 2], 8));
console.log(foursum([-2, -1, -1, 1, 1, 2, 2], 0));
