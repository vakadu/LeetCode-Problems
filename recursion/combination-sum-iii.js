function recursion(k, n) {
	let arr = Array.from({ length: n > 9 ? 9 : n }, (_, i) => {
		return i + 1;
	});

	return helper(arr, n, [], [], 0, k);
}

function helper(a, t, r, temp, start, k) {
	if (temp.length === k && t < 9) {
		if (t === 0) {
			r.push([...temp]);
		}

		return;
	}

	if (t < 0) {
		return;
	}

	for (let i = start; i < a.length; i++) {
		// if (i > 0 && a[i] === a[i - 1]) {
		// 	continue;
		// }
		let sum = t - a[i];
		temp.push(a[i]);
		helper(a, sum, r, temp, i + 1, k);
		temp.pop();
	}

	return r;
}

console.log(recursion(3, 7));
console.log(recursion(3, 9));
console.log(recursion(4, 1));
console.log(recursion(2, 18));
