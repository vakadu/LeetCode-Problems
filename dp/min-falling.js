function falling(matrix) {
    let min = Number.MAX_SAFE_INTEGER;
    let memo = Array.from({ length: matrix.length }, () =>
        Array(matrix[0].length).fill(null)
    );

    for (let i = 0; i < matrix[0].length; i++) {
        let temp = helper(matrix, 0, i, memo);
        min = Math.min(temp, min);
    }

    return min;
}

function helper(matrix, i, j, memo) {
    if (memo[i][j] !== null) {
        return memo[i][j];
    }
    if (i >= matrix.length - 1) {
        return matrix[i][j];
    }

    let min = Number.MAX_SAFE_INTEGER;

    let down = matrix[i][j] + helper(matrix, i + 1, j, memo),
        leftDig,
        rightDig;
    min = Math.min(min, down);
    if (j > 0) {
        leftDig = matrix[i][j] + helper(matrix, i + 1, j - 1, memo);
        min = Math.min(min, leftDig);
    }
    if (j < matrix[i].length - 1) {
        rightDig = matrix[i][j] + helper(matrix, i + 1, j + 1, memo);
        min = Math.min(min, rightDig);
    }

    memo[i][j] = min;
    return min;
}

console.log(
    falling([
        [2, 1, 3],
        [6, 5, 4],
        [7, 8, 9],
    ])
);

console.log(
    falling([
        [-19, 57],
        [-40, -5],
    ])
);
