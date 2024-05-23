function subset(nums, target, memo = {}) {
	if (memo[target]) {
		return memo[target];
	}

	if (target === 0) {
		return true;
	}

	if (target < 0) {
		return false;
	}

	for (let num of nums) {
		let temp = target - num;
		if (subset(nums, temp) === true) {
			memo[target] = true;
			return true;
		}
	}

	memo[target] = false;
	return false;
}

function tabluation(nums, target) {
	let table = new Array(target + 1).fill(false);
	table[0] = true;

	for (let i = 0; i <= target; i++) {
		for (let num of nums) {
			if (table[i] === true) {
				table[i + num] = true;
			}
		}
	}

	console.log(table[target]);
}

// console.log(subset([2, 3, 7, 8, 10], 11));
console.log(tabluation([2, 3, 7, 8, 10], 11));
