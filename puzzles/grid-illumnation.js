function createTwoArray(n, defaultValue) {
    let arr = Array.from({ length: n }, () => Array(n).fill(defaultValue));
    return arr;
}

let adjacentMoves = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1]
];

function illuminate(n, lamps, queries) {
    let arr = createTwoArray(n, false), result = [];
    
    for(let i=0; i<lamps.length; i++) {
        lightOn(arr, lamps[i][0], lamps[i][1]);
    }

    for(let i=0; i<queries.length; i++) {
        if(arr[queries[i][0]][queries[i][1]]) {
            for(let move of adjacentMoves) {
                let newRow = queries[i][0] + move[0];
                let newCol = queries[i][1] + move[1];
                if(isValid(arr, newRow, newCol)) {
                    arr[queries[i][0]][queries[i][1]] = false;
                    arr[newRow][newCol] = false;
                }
            }
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}

function lightOn(arr, r, c) {

    //only inc colum
    for(let i=0; i<arr.length; i++) {
        arr[r][i] = true;
    }

    //only inc row
    for(let i=0; i<arr.length; i++) {
        arr[i][c] = true;
    }

    for(let i=0; i<arr.length-1; i++) {
        arr[i+1][i+1] = true;
    }

    return arr;
}

function isValid(b, r, c) {
    if(r>=0 && r<b.length && c>=0 && c<b[0].length) {
        return true;
    }
    return false
}

console.log(illuminate(5, [[0,0],[0,1],[0,4]], [[0,0],[0,1],[0,2]]));
