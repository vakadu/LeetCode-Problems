function bestSum(nums, target, memo = {}) {
	if (target in memo) {
		return memo[target];
	}
	if (target < 0) {
		return null;
	}

	if (target === 0) {
		return [];
	}
	console.log(memo);

	let shortComb = null;
	for (let num of nums) {
		let remainder = target - num;
		let result = bestSum(nums, remainder, memo);

		if (result && result !== null) {
			const combination = [...result, num];

			if (shortComb === null || combination.length < shortComb.length) {
				shortComb = combination;
			}
		}
	}

	memo[target] = shortComb;
	return memo[target];
}

function tablaution(nums, target) {
	let arr = new Array(target + 1).fill(null);
	arr[0] = [];

	for (let i = 0; i <= target; i++) {
		if (arr[i] !== null) {
			for (let num of nums) {
				let temp = [...arr[i], num];

				if (!arr[i + num] || arr[i + num].length > temp.length) {
					arr[i + num] = temp;
				}
			}
		}
	}

	console.log(arr);
}

console.log(tablaution([2, 3, 5], 8));

// console.log(bestSum([2,3], 8));
