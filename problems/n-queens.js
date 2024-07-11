function nQueens(n) {
	let table = new Array(n).fill(false).map(() => new Array(n).fill(false));
	let result = [];
	helper(table, 0, result);
	return result;
}

function display(table) {
	let board = table.map((row) => {
		return row.map((val) => {
			return val ? 'Q' : '.';
		});
	});
	return board;
}

function helper(table, r, result) {
	if (r === table.length) {
		result.push(display(table));

		return;
	}

	for (let i = 0; i < table[0].length; i++) {
		if (isValid(table, r, i)) {
			table[r][i] = true;
			helper(table, r + 1, result);
			table[r][i] = false;
		}
	}
}

function isValid(table, r, c) {
	for (let i = 0; i < r; i++) {
		if (table[i][c]) {
			return false;
		}
	}

	let maxLeft = Math.min(r, c);
	for (let i = 1; i < maxLeft; i++) {
		if (table[r - i][c - i]) {
			return false;
		}
	}

	let maxRight = Math.min(r, table.length - c - 1);
	for (let i = 1; i < maxRight; i++) {
		if (table[r - i][c + i]) {
			return false;
		}
	}

	return true;
}

console.log(nQueens(3));
