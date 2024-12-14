fun main() {
	zigzag("PAYPALISHIRING", 3)
}

fun zigzag(s: String, numRows: Int): String {
	var result = StringBuilder();
	val step = 2 * numRows - 2;

	if(numRows <=1) {
		return s
	}

	for(i in 0 until numRows) {
		var j = i

		while(j<s.length) {
			result.append(s[j])

			if (i > 0 && i < numRows - 1 && j + step - 2 * i < s.length) {
                result.append(s[j + step - 2 * i])
            }

			j+=step;
		}
	}

	return result.toString()
}
