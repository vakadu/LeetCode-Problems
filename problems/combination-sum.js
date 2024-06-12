function combination(candidates, target) {
	let result = [];
	helper(candidates, target, 0, [], result);
	console.log(result);
}

function helper(candidates, target, n, temp, result) {
	if (target === 0) {
		result.push(temp);
	}

	if (n >= candidates.length) {
		return;
	}

	if (candidates[n] <= target) {
		temp.push(candidates[n]);
		helper(candidates, target - candidates[n], n, temp, result);
		console.log('here');
	} else {
		helper(candidates, target, n + 1, temp, result);
	}
}

console.log(combination([2, 3, 5], 8));
