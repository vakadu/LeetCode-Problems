function setZeroes(matrix) {
    const rows = new Array(matrix.length).fill(0),
        cols = new Array(matrix[0].length).fill(0);

    for (let i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = 1;
                cols[j] = 1;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (rows[i] === 1 || cols[j] === 1) {
                matrix[i][j] = 0;
            }
        }
    }

    console.log(rows, cols);

    // for (let i = 0; i < matrix.length; i++) {
    //     for (j = 0; j < matrix[i].length; j++) {
    //         if (matrix[i][j] === 0) {
    //             rowUpdate(matrix, i, j);
    //             colUpdate(matrix, i, j);
    //         }
    //     }
    // }

    // for (let i = 0; i < matrix.length; i++) {
    //     for (j = 0; j < matrix[i].length; j++) {
    //         if (matrix[i][j] === -1) {
    //             matrix[i][j] = 0;
    //         }
    //     }
    // }
    console.log(matrix);
}

function rowUpdate(m, i, j) {
    for (let k = 0; k < m.length; k++) {
        if (m[k][j] !== 0) {
            m[k][j] = -1;
        }
    }
}

function colUpdate(m, i, j) {
    for (let k = 0; k < m[i].length; k++) {
        if (m[i][k] !== 0) {
            m[i][k] = -1;
        }
    }
}

console.log(
    setZeroes([
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
    ])
);
console.log(
    setZeroes([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ])
);
