function pascal(numRows) {
    let result = [[1], [1, 1]];

    if (numRows <= 1) {
        return [result[numRows - 1]];
    }

    for (let i = 2; i < numRows; i++) {
        let prev = result[i - 1];
        let newRow = new Array(i + 1);
        newRow[0] = 1;
        newRow[newRow.length - 1] = 1;

        for (let j = 0; j < newRow.length - 2; j++) {
            let sum = prev[j] + prev[j + 1];
            newRow[j + 1] = sum;
        }

        result[i] = newRow;
    }

    return result;
}

console.log(pascal(5));
