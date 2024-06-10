function recursion(nums, target) {
	return helper(nums, target, 0);
}

function helper(w, t, n) {
	if (t === 0) {
		return 1;
	}
	if (n >= w.length) {
		return 0;
	}

	if (t >= w[n]) {
		return helper(w, t - w[n], n) + helper(w, t, n + 1);
	} else {
		return helper(w, t, n + 1);
	}
}

console.log(recursion([1, 2, 5], 5));
