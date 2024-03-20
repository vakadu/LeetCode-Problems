function minSum(grid) {
    let a = helper(grid, 0, 0, grid[0][0]);
    console.log(Math.min(...a), a);
}

function helper(g, r, c, min) {
    let m = g.length-1, n=g[0].length-1, result = [];

    if(r === m && c === n) {
        return [min];
    }

    if(r<m) {
        result = result.concat(helper(g, r+1, c, min + g[r+1][c]));
    }
    if(c<n) {
        result = result.concat(helper(g, r, c+1, min + g[r][c+1]));
    }

    return result;
}

console.log(minSum([[1,3,1],[1,5,1],[4,2,1]]
    ));
