function recursion(word1, word2) {
	const lcs = helper(word1, word2, word1.length, word2.length);
	return word1.length - lcs.length + word2.length - lcs.length;
}

function helper(w1, w2, m, n) {
	if (m <= 0 || n <= 0) {
		return '';
	}

	if (w1[m - 1] === w2[n - 1]) {
		return helper(w1, w2, m - 1, n - 1) + w1[m - 1];
	} else {
		let sub1 = helper(w1, w2, m - 1, n);
		let sub2 = helper(w1, w2, m, n - 1);
		return sub1.length > sub2.length ? sub1 : sub2;
	}
}

function memoize(word1, word2) {
	let table = new Array(word1.length + 1)
		.fill('')
		.map(() => new Array(word2.length + 1).fill(''));
	const lcs = mem(word1, word2, word1.length, word2.length, table);
	return word1.length - lcs.length + word2.length - lcs.length;
}

function mem(w1, w2, m, n, table) {
	if (table[m][n] !== '') {
		return table[m][n];
	}
	if (m <= 0 || n <= 0) {
		return '';
	}

	if (w1[m - 1] === w2[n - 1]) {
		table[m][n] = mem(w1, w2, m - 1, n - 1, table) + w1[m - 1];
		return table[m][n];
	} else {
		let sub1 = mem(w1, w2, m - 1, n, table);
		let sub2 = mem(w1, w2, m, n - 1, table);
		table[m][n] = sub1.length > sub2.length ? sub1 : sub2;
		return table[m][n];
	}
}

function dp(word1, word2) {
	let table = new Array(word1.length + 1)
		.fill('')
		.map(() => new Array(word2.length + 1).fill(''));

	for (let i = 1; i < word1.length + 1; i++) {
		for (let j = 1; j < word2.length + 1; j++) {
			if (word1[i - 1] === word2[j - 1]) {
				table[i][j] = table[i - 1][j - 1] + word1[i - 1];
			} else {
				let sub1 = table[i - 1][j];
				let sub2 = table[i][j - 1];
				table[i][j] = sub1.length > sub2.length ? sub1 : sub2;
			}
		}
	}
	const lcs = table[word1.length][word2.length];
	return word1.length - lcs.length + word2.length - lcs.length;
}

console.log(dp('sea', 'eat')); //2
console.log(dp('leetcode', 'etco')); //4
console.log(dp('park', 'spake')); //3
console.log(dp('dinitrophenylhydrazine', 'benzalphenylhydrazone')); //13
