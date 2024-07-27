function recursion(candidates, target) {
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
		let tar = t - c[i];
		temp.push(c[i]);
		helper(c, tar, r, temp, i);
		temp.pop();
	}

	return r;
}

const recursionCall = recursion([2, 3, 5], 8);
console.log(recursionCall);
