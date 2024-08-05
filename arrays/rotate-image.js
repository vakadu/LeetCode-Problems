//rotate the array by rows last row to first row and so on
//then swap the m[i][j] to m[j][i]
//this is called transpose of matrix

function rotateImage(matrix) {
    let rows = matrix.length,
        cols = matrix[0].length,
        start = 0,
        end = rows - 1;

    while (start < end) {
        let temp = matrix[start];
        matrix[start] = matrix[end];
        matrix[end] = temp;
        start++;
        end--;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = i + 1; j < cols; j++) {
            console.log(matrix[i][j]);
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    //brute force
    // let table = new Array(matrix.length)
    //     .fill(0)
    //     .map(() => new Array(matrix.length).fill(0));
    // for (let i = 0; i < matrix.length; i++) {
    //     for (let j = 0; j < matrix[i].length; j++) {
    //         table[j][matrix.length - 1 - i] = matrix[i][j];
    //     }
    // }
    // return table;
}

console.log(
    rotateImage([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);
