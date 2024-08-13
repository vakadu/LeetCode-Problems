function search(matrix) {
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < matrix.length; i++) {
        let start = 0,
            end = matrix[i].length - 1;

        while (start <= end) {
            mid = Math.floor(start + (end - start) / 2);

            if (mid > 0 && matrix[i][mid] === 1 && matrix[i][mid - 1] === 0) {
                max = Math.max(max, end - mid + 1);
                break;
            } else if (mid === 0 && matrix[i][mid] === 1) {
                max = Math.max(max, matrix[i].length);
                break;
            } else if (matrix[i][mid] === 1) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return max;
}

console.log(
    search([
        [0, 1, 1, 1],
        [0, 0, 1, 1],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
    ])
);

console.log(
    search([
        [0, 0],
        [1, 1],
    ])
);
