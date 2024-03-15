function createMatrix(n, defaultValue) {
    return Array.from({ length: n }, () => Array(n).fill(defaultValue))
}

function spiralMatrix(n) {
    let result = createMatrix(n, 0), left = 0, top = 0, right = n-1, bottom = n-1, count = 1;

    while(top <= bottom && left <= right) {
        for(let i=left; i<=right; i++) {
            result[top][i] = count;
            count++;
        }
        top++;

        for(let i=top; i<=bottom; i++) {
            result[i][right] = count;
            count++
        }
        right--;

        for(let i=right; i>=left; i--) {
            result[bottom][i] = count;
            count++;
        }
        bottom--;

        for(let i=bottom; i>=top; i--) {
            result[i][left] = count;
            count++;
        }

        left++;
    }


    return result;
}

spiralMatrix(4);
