const obj = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

function romanToInt(s) {
	let sum = 0;
	for (let i = 0; i < s.length; i++) {
		if (obj[s[i]] < obj[s[i + 1]]) {
			let temp = obj[s[i + 1]] - obj[s[i]];
			sum += temp;
			i++;
		} else {
			sum += obj[s[i]];
		}
	}
	return sum;
}

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
