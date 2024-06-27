function permutations(s, p) {
	if (s === '') {
		return [p];
	}
	let result = [];

	for (let i = 0; i < s.length; i++) {
		let firstChar = s[i],
			remin = s.slice(0, i) + s.slice(i + 1);
		let perm = permutations(remin, p + firstChar);
		result.push(...perm);
	}
	return result;
}

function permutations2(s, p) {
	if (s === '') {
		return [p];
	}
	let result = [];

	for (let i = 0; i < s.length; i++) {
		let firstChar = s[i],
			remin = s.slice(0, i).concat(s.slice(i + 1));
		let perm = permutations(remin, p + firstChar);
		result.push(...perm);
	}
	return result;
}

console.log(permutations2(['a', 'b', 'c'], ''));
