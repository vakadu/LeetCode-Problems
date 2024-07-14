function spiralMatrix(matrix) {
    let top=0, left=0, right=matrix[0].length-1, bottom=matrix.length-1, result=[];

    while(top <= bottom && left <= right) {
        for(let i=left; i<=right; i++) {
            result.push(matrix[left][i]);
        }
        top++;
    
        for(let i=top; i<=bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
    
        if(top<=bottom) {
            for(let i=right; i>=left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        
        if(left <= right) {
            for(let i=bottom; i>=top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    console.log(result);
};

console.log(spiralMatrix([[1,2,3],[4,5,6],[7,8,9]]));
// console.log(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
// console.log(spiralMatrix([[2,3]]));

