function rotateImage(matrix) {
    let rows = matrix.length, cols = matrix[0].length, start = 0, end = rows-1;

    while(start<end) {
        let temp = matrix[start];
        matrix[start] = matrix[end];
        matrix[end] = temp;
        start++;
        end--;
    }

    // for(let start=0, end=rows-1; start<end; start++, end--) {
    //     let temp = matrix[start];
    //     matrix[start] = matrix[end];
    //     matrix[end] = temp;
    // }


    for(let i=0; i<rows; i++) {
        for(let j=i+1; j<cols; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    return matrix;
}

rotateImage([[1,2,3],[4,5,6],[7,8,9]]);
