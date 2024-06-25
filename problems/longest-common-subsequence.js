function recursion(text1, text2) {
	return rechelper(text1, text2, text1.length, text2.length);
}

function rechelper(t1, t2, m, n) {
	if (m <= 0 || n <= 0) {
		return 0;
	}

	if (t1[m - 1] === t2[n - 1]) {
		return 1 + rechelper(t1, t2, m - 1, n - 1);
	} else {
		return Math.max(rechelper(t1, t2, m - 1, n), rechelper(t1, t2, m, n - 1));
	}
}

function optimal(text1, text2) {
	let table = new Array(text1.length + 1)
		.fill(-1)
		.map(() => new Array(text2.length + 1).fill(-1));

	return ophelper(text1, text2, text1.length, text2.length, table);
}

function ophelper(t1, t2, m, n, table) {
	if (table[m][n] !== -1) {
		return table[m][n];
	}

	if (m <= 0 || n <= 0) {
		return 0;
	}

	if (t1[m - 1] === t2[n - 1]) {
		table[m][n] = 1 + ophelper(t1, t2, m - 1, n - 1, table);
	} else {
		table[m][n] = Math.max(
			ophelper(t1, t2, m - 1, n, table),
			ophelper(t1, t2, m, n - 1, table)
		);
	}

	return table[m][n];
}

function dp(text1, text2) {
	let table = new Array(text1.length + 1)
		.fill(-1)
		.map(() => new Array(text2.length + 1).fill(-1));

	for (let i = 0; i < text1.length + 1; i++) {
		for (let j = 0; j < text2.length + 1; j++) {
			if (i === 0 || j === 0) {
				table[i][j] = 0;
			}
		}
	}

	for (let i = 1; i < text1.length + 1; i++) {
		for (let j = 1; j < text2.length + 1; j++) {
			if (text1[i - 1] === text2[j - 1]) {
				table[i][j] = 1 + table[i - 1][j - 1];
			} else {
				table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
			}
		}
	}

	return table[text1.length][text2.length];
}

console.log(dp('abcde', 'ace')); //3
// console.log(optimal('pmjghexybyrgzczy', 'hafcdqbgncrcbihkd'));
