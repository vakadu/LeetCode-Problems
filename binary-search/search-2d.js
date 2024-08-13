function search(matrix, target) {
    let i = 0,
        j = matrix[i].length - 1;

    while (i < matrix.length && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] > target) {
            j--;
        } else {
            i++;
        }
    }

    return false;
}

console.log(
    search(
        [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ],
        3
    )
);
console.log(
    search(
        [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ],
        12
    )
);
