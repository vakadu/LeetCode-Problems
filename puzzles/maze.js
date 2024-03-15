function maze(board, n) {
    return helper(board, 0, 0, "")
}

function helper(grid, row, col, p) {
    console.log(row, col, grid.length);
    if(row === grid.length-1 && col === grid.length - 1) {
        console.log(p);
        return p;
    }

    let list = [];

    if(row < grid.length - 1) {
        if(grid[row+1][col]) {
            list = list.concat(helper(grid, row+1, col, p+"D"))
        }
    }

    if(col < grid.length - 1) {
        if(grid[row][col+1]) {
            list = list.concat(helper(grid, row, col+1, p+"R"))
        }
    }

    return list;
}

console.log(maze([[1,0],[1,0]], 2));


// [[1,0,0,0],
// [1,1,0,1],
// [1,1,0,0],
// [0,1,1,1]]