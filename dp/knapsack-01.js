function recursive(wt, pt, total) {
	return helper(wt, pt, total, 0);
}

function helper(w, p, t, n) {
	if (t <= 0 || n >= w.length) {
		return 0;
	}

	if (t >= w[n]) {
		return Math.max(p[n] + helper(w, p, t - w[n], n + 1), helper(w, p, t, n + 1));
	} else {
		return helper(w, p, t, n + 1);
	}
}

function memoize(wt, pt, total) {
	return memoizehelper(wt, pt, total, 0);
}

function memoizehelper(w, p, t, n, memo = {}) {
	let key = `${t}-${n}`;
	if (memo[key]) {
		return memo[key];
	}
	if (t <= 0 || n > w.length) {
		return 0;
	}

	if (t >= w[n]) {
		memo[key] = Math.max(
			p[n] + memoizehelper(w, p, t - w[n], n + 1, memo),
			memoizehelper(w, p, t, n + 1, memo)
		);
		return memo[key];
	} else {
		memo[key] = memoizehelper(w, p, t, n + 1, memo);
		return memo[key];
	}
}

function tabluation(wt, pt, total) {
	let table = new Array(wt.length + 1).fill(-1).map(() => new Array(total + 1).fill(-1));

	for (let i = 0; i < wt.length + 1; i++) {
		for (let j = 0; j < total + 1; j++) {
			if (i === 0 || j === 0) {
				table[i][j] = 0;
			}
		}
	}

	for (let i = 1; i < wt.length + 1; i++) {
		for (let j = 1; j < total + 1; j++) {
			if (wt[i - 1] <= j) {
				table[i][j] = Math.max(pt[i - 1] + table[i - 1][j - wt[i - 1]], table[i - 1][j]);
			} else {
				table[i][j] = table[i - 1][j];
			}
		}
	}

	return table[wt.length][total];
}

console.log(tabluation([4, 5, 1], [1, 2, 3], 4)); //3
console.log(tabluation([4, 5, 6], [1, 2, 3], 3)); //0
console.log(
	tabluation(
		[23, 31, 29, 44, 53, 38, 63, 85, 89, 82],
		[92, 57, 49, 68, 60, 43, 67, 84, 87, 72],
		165
	)
); //309

console.log(tabluation([41, 50, 49, 59, 55, 57, 60], [442, 525, 511, 593, 546, 564, 617], 170)); //1735

console.log(tabluation([4, 5, 6], [1, 2, 3], 15)); //6
console.log(tabluation([4, 5, 1, 3, 2, 5], [2, 3, 1, 5, 4, 7], 15)); //19
console.log(tabluation([2, 3, 4, 5], [1, 2, 5, 6], 8)); //8

console.log('================');

console.log(recursive([4, 5, 1], [1, 2, 3], 4)); //3
console.log(recursive([4, 5, 6], [1, 2, 3], 3)); //0
console.log(
	recursive(
		[23, 31, 29, 44, 53, 38, 63, 85, 89, 82],
		[92, 57, 49, 68, 60, 43, 67, 84, 87, 72],
		165
	)
); //309

console.log(recursive([41, 50, 49, 59, 55, 57, 60], [442, 525, 511, 593, 546, 564, 617], 170)); //1735

console.log(recursive([4, 5, 6], [1, 2, 3], 15)); //6
console.log(recursive([4, 5, 1, 3, 2, 5], [2, 3, 1, 5, 4, 7], 15)); //19
console.log(recursive([2, 3, 4, 5], [1, 2, 5, 6], 8)); //8

console.log('================');

console.log(memoize([4, 5, 1], [1, 2, 3], 4)); //3
console.log(memoize([4, 5, 6], [1, 2, 3], 3)); //0
console.log(
	memoize([23, 31, 29, 44, 53, 38, 63, 85, 89, 82], [92, 57, 49, 68, 60, 43, 67, 84, 87, 72], 165)
); //309

console.log(memoize([41, 50, 49, 59, 55, 57, 60], [442, 525, 511, 593, 546, 564, 617], 170)); //1735

console.log(memoize([4, 5, 6], [1, 2, 3], 15)); //6
console.log(memoize([4, 5, 1, 3, 2, 5], [2, 3, 1, 5, 4, 7], 15)); //19
console.log(memoize([2, 3, 4, 5], [1, 2, 5, 6], 8)); //9
// console.log(topDown([4,5,1], [1,2,3], 4))
