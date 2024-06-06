function thrsum(nums) {
	let result = [],
		set = new Set();
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				let sum = nums[i] + nums[j] + nums[k];
				let temp = [nums[i], nums[j], nums[k]].sort().toString();

				if (sum === 0) {
					if (!set.has(temp)) {
						set.add(temp, sum);

						result.push([nums[i], nums[j], nums[k]]);
					}
				}
			}
		}
	}

	console.log(result);
}

function optimal(nums) {
	nums.sort((a, b) => a - b);
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		let s = i + 1,
			e = nums.length - 1;
		while (s < e) {
			if (nums[i] + nums[s] + nums[e] > 0) {
				e--;
			} else if (nums[i] + nums[s] + nums[e] < 0) {
				s++;
			} else {
				result.push([nums[i], nums[s], nums[e]]);
				s++;
				e--;
				while (nums[s] === nums[s - 1] && s < e) {
					s++;
				}
				while (nums[e] === nums[e - 1] && s < e) {
					e--;
				}
			}
		}
	}
	console.log(result);
}

// console.log(thrsum([-1, 0, 1, 2, -1, -4]));
// console.log(optimal([-1, 0, 1, 2, -1, -4]));
// console.log(optimal([-2, 0, 0, 2, 2]));
console.log(optimal([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
