function search2dMatrix(matrix, target) {
    return helper(matrix, 0, target);
}

function helper(g, r, t) {
    if(r>g.length-1) {
        return false;
    }
    for(let i=0; i<g[r].length; i++) {
        if(g[r][i] === t) {
            return true;
        }
    }

    return helper(g, r+1, t);
}

console.log(search2dMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 62));
