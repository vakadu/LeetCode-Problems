//j + step - 2*i dont know how to come to this

function zigzag(s, numRows) {
	let result = '',
		step = 2 * numRows - 2;

	for (let i = 0; i < numRows; i++) {
		for (let j = i; j < s.length; j += step) {
			result += s[j];

			if (i !== 0 && i !== numRows - 1 && j + step - 2 * i < s.length) {
				result += s[j + step - 2 * i];
			}
		}
	}

	console.log(result);
}

zigzag('PAYPALISHIRING', 3);
zigzag('PAYPALISHIRING', 4);
