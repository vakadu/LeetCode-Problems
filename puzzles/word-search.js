function wordSearch(arr, s) {

    for(let i=0; i<arr.length; i++) {
        for(j=0; j<arr[0].length; j++) {
            if(backtrack(arr, i, j, s, 0)) {
                return true
            }
        }
    }

    return false;
}

function backtrack(g, r, c, str, index) {
    console.log(str);

    if(index === str.length) {
        return true;
    }

    if(r<0 || r>=g.length || c<0 || c>=g[0].length || g[r][c] !== str[index]) {
        return false;
    }

    const char = g[r][c];
    g[r][c] = '#'; // marked as visited

    const directions = [[0,1], [0,-1], [1,0], [-1,0]];

    for(let [x, y] of directions) {
        if(backtrack(g, r+x, c+y, str, index + 1)) {
            return true;
        }
    }

    g[r][c] = char;
    return false;
}

console.log(wordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));
