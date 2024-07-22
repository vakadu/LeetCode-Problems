function recursion(candidates, target) {
	candidates.sort((a, b) => a - b);
	return helper(candidates, target, [], [], 0);
}

function helper(c, t, r, temp, start) {
	if (t === 0) {
		r.push([...temp]);
		return;
	}

	if (t < 0) {
		return;
	}

	for (let i = start; i < c.length; i++) {
		if (i > start && c[i - 1] === c[i]) {
			continue;
		}
		let sum = t - c[i];
		temp.push(c[i]);
		helper(c, sum, r, temp, i + 1);
		temp.pop();
	}

	return r;
}

console.log(recursion([10, 1, 2, 7, 6, 1, 5], 8));
