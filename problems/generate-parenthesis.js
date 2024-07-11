function recursive(n) {
	return helper(n, n, '');
}

function helper(o, c, p) {
	if (o === 0 && c === 0) {
		return [p];
	}

	let result = [];

	if (o > 0) {
		// result = result.concat(helper(o - 1, c, p + '('));
		result = [...result, ...helper(o - 1, c, p + '(')];
	}

	if (c > o) {
		result = result.concat(helper(o, c - 1, p + ')'));
	}

	return result;
}

console.log(recursive(3));
