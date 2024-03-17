function uniquePaths(grid) {
    return helper(grid, 0, 0, "");
}

function helper(g, r, c, p) {
    let m = g.length - 1, n = g[0].length - 1, count = 0;

    if(g[r][c]) {
        return 0;
    }

    if(r === m && c === n) {
        return 1;
    }

    if(r<m && !g[r + 1][c]) {
        count += helper(g, r+1, c, p + "D");
    }

    if(c<n && !g[r][c+1]) {
        count += helper(g, r, c+1, p + "R");
    }

    return count
}

console.log(uniquePaths([[1]]));
