function tour(board) {
    if(board[0][0] !== 0) {
        return false;
    }

    return helper(board, 0, 0, 1);
}

function helper(grid, row, col, count) {
    let total = grid.length * grid.length;

    if(count === total) {
        return true;
    }

    const moves = [
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1]
    ];

    for(let move of moves) {
        let newRow = row + move[0];
        let newCol = col + move[1];

        if(isValid(grid, newRow, newCol) && count === grid[newRow][newCol]) {
            if(helper(grid, newRow, newCol, count+1)) {
                return true
            }
        }
    }

    return false
}

function isValid(b, r, c) {
    if(r>=0 && r < b.length && c>=0 && c < b[0].length) {
        return true;
    }
    return false
}

console.log(tour([[0,3,6],[5,8,1],[2,7,4]]));
