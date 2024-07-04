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

function permutations3(s, p) {
	if (s.length === 0) {
		return [p];
	}
	let result = [];

	for (let i = 0; i < s.length; i++) {
		let firstChar = s[i],remain = s.slice(0, i).concat(s.slice(i + 1));
		let perm = permutations3(remain, p.concat(firstChar));
		result = result.concat(perm);
	}
	return result;
}

function permutations4(s, p) {
	if (s.length === 0) {
		return [p];
	}
	let result = [];

	for (let i = 0; i < s.length; i++) {
		if(s[i] === s[i-1]) {
			continue;
		}
		let firstChar = s[i],remain = s.slice(0, i).concat(s.slice(i + 1));
		let perm = permutations4(remain, p.concat(firstChar));
		result = result.concat(perm);
	}
	return result;
}

console.log(permutations4([1,1,2], []));
