function recursion(candidates, target) {
	candidates.sort((a, b) => a - b);
	let result = [];
	helper(candidates, target, 0, [], result);
	console.log(result);
}

function helper(c, t, n, temp, result) {
	if (t === 0) {
		result.push([...temp]);
		return;
	}

	if (t < 0 || n >= c.length) {
		return;
	}

	for (let i = n; i < c.length; i++) {
		if (i > n && c[i] === c[i - 1]) {
			continue;
		}

		if (t < c[i]) {
			break;
		}

		temp.push(c[i]);
		helper(c, t - c[i], i + 1, temp, result);
		temp.pop();
	}
}

console.log(recursion([2, 5, 2, 1, 2], 5));
console.log(recursion([10, 1, 2, 7, 6, 1, 5], 8));
