function sudoko(b, row) {

    if(row === b.length) {
        return b;
    }

    for(let col = 0; col<b.length; col++) {
        if(isSafe(b, 0, 2)) {

        }
    }
}

function isSafe(b, r, c) {
    for(let i=0; i<=r; i++) {
        console.log(b[i][c]);
    }
}

let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

sudoko(board, 0);