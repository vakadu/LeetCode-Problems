function spiralMatrix(matrix) {

    let n = matrix.length, m = matrix[0].length, top = 0, left = 0, right = m-1, bottom = n-1, result = [];

    while(top <= bottom && left <= right) {
        //left to right
        for(let i =left; i<=right; i++) {
            result.push(matrix[left][i]);
        }
        top++;

        //top to bottom
        for(let i=top; i<=bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        //right to left
        if (top <= bottom) {
            for(let i=right; i>=left; i--) {
                result.push(matrix[bottom][i])
            }
            bottom--;
        }

        //bottom to top
        if (left <= right) {
            for(let i=bottom; i>=top; i--) {
                result.push(matrix[i][left])
            }
            left++;
        }
    }

    return result;
}

spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);
