function wordSearch(arr, s) {

    for(let i=0; i<arr.length; i++) {
        for(j=0; j<arr[0].length; j++) {
            if(arr[i][j] === s[0] && check(arr, i, j, s)) {
                return true
            }
        }
    }

    return false;
}

function check(g, r, c, str) {

    for(let i=1; i<str.length; i++) {
        if((c+i) < g[0].length - 1 && g[r][c+i] === str[i]) {
            continue;
        }
        if((c-i) >= 0 && g[r][c-i] === str[i]) {
            continue;
        }
        if((r+i) < g.length - 1 && g[r+i][c] === str[i]) {
            continue;
        }
        if((r-i) >= 0 && g[r-i][c] === str[i]) {
            continue;
        };
        return;
    }

    return true
}

console.log(wordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));
