function recursion(s) {
	let lcs = helper(s, s.split('').reverse().join(''), s.length, s.length);
	return s.length - lcs.length;
}

function helper(s, t, m, n) {
	if (m <= 0 || n <= 0) {
		return '';
	}

	if (s[m - 1] === t[n - 1]) {
		return helper(s, t, m - 1, n - 1) + s[m - 1];
	} else {
		let sub1 = helper(s, t, m - 1, n);
		let sub2 = helper(s, t, m, n - 1);
		return sub1.length > sub2.length ? sub1 : sub2;
	}
}

function memoize(s) {
	let table = new Array(s.length + 1).fill('').map(() => new Array(s.length + 1).fill(''));
	let lcs = mem(s, s.split('').reverse().join(''), s.length, s.length, table);
	return s.length - lcs.length;
}

function mem(s, t, m, n, table) {
	if (table[m][n] !== '') {
		return table[m][n];
	}
	if (m <= 0 || n <= 0) {
		return '';
	}

	if (s[m - 1] === t[n - 1]) {
		table[m][n] = mem(s, t, m - 1, n - 1, table) + s[m - 1];
		return table[m][n];
	} else {
		let sub1 = mem(s, t, m - 1, n, table);
		let sub2 = mem(s, t, m, n - 1, table);
		table[m][n] = sub1.length > sub2.length ? sub1 : sub2;
		return table[m][n];
	}
}

function dp(s) {
	let table = new Array(s.length + 1).fill('').map(() => new Array(s.length + 1).fill('')),
		t = s.split('').reverse().join('');

	for (let i = 1; i < s.length + 1; i++) {
		for (let j = 1; j < t.length + 1; j++) {
			if (s[i - 1] === t[j - 1]) {
				table[i][j] = table[i - 1][j - 1] + s[i - 1];
			} else {
				let sub1 = table[i - 1][j];
				let sub2 = table[i][j - 1];
				table[i][j] = sub1.length > sub2.length ? sub1 : sub2;
			}
		}
	}

	return s.length - table[s.length][s.length].length;
}

console.log(dp('mbadm')); //2
console.log(dp('leetcode')); //5
console.log(dp('fomyxevyghcgdouxvio')); //12
