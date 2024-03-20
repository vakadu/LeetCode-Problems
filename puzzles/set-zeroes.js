function setZeroes(matrix) {
    let m = matrix.length, n = matrix[0].length, r = new Set(), c = new Set();

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(matrix[i][j] === 0) {
                r.add(i);
                c.add(j);
            }
        }
    }
    console.log(r, c);

    r.forEach((row) => {
        for(let i=0; i<n; i++) {
            matrix[row][i] = 0;
        }
    });

    c.forEach((col) => {
        for(let i=0; i<m; i++) {
            matrix[i][col] = 0;
        }
    });

    return matrix;
}

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
