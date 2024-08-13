function findPeak(mat) {
    let start = 0,
        end = mat[0].length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let max = getMax(mat, mid);
        let left = mid > 0 ? mat[max][mid - 1] : -1;
        let right = mid < mat[max].length - 1 ? mat[max][mid + 1] : -1;

        if (mat[max][mid] > left && mat[max][mid] > right) {
            return [max, mid];
        } else if (mat[max][mid] < left) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
}

function getMax(mat, j) {
    let max = Number.MIN_SAFE_INTEGER,
        row = 0;

    for (let i = 0; i < mat.length; i++) {
        if (mat[i][j] > max) {
            max = mat[i][j];
            row = i;
        }
    }

    return row;
}

// console.log(
//     findPeak([
//         [1, 4],
//         [3, 2],
//     ])
// );

// console.log(
//     findPeak([
//         [10, 20, 15],
//         [21, 30, 14],
//         [7, 16, 32],
//     ])
// );

console.log(
    findPeak([
        [
            [41, 8, 2, 48, 18],
            [16, 15, 9, 7, 44],
            [48, 35, 6, 38, 28],
            [3, 2, 14, 15, 33],
            [39, 36, 13, 46, 42],
        ],
    ])
);
