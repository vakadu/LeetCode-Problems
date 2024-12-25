function zigzag(s, numRows) {
    let result = '',
        step = 2 * numRows - 2;

    if (numRows <= 1) {
        return s;
    }

    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < s.length; j += step) {
            result += s[j];

            if (i > 0 && i < numRows - 1 && j + step - 2 * i < s.length) {
                result += s[j + step - 2 * i];
            }
        }
    }

    return result;
}

console.log(zigzag('PAYPALISHIRING', 3));
