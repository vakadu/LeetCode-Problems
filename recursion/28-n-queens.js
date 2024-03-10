import { create2DArray } from "../utils";

function nQueens(board, row) {
    if(row === board.length) {
        display(board);
        console.log("==========");
        return 1;
    }

    let count = 0;

    for(let col=0; col < board.length; col++) {
        if(isSafe(col, row, board)) {
            board[row][col] = true;
            count += nQueens(board, row + 1);
            board[row][col] = false;
        }
    }

    return count;

}

function isSafe(c, r, b) {
    for(let i=0; i<r; i++) {
        if(b[i][c]) {
            return false;
        }
    }

    let maxLeft = Math.min(r, c);
    for(let i=1; i<=maxLeft; i++) {
        if(b[r-i][c-i]) {
            return false;
        }
    }

    let maxRight = Math.min(r, b.length - c- 1);
    for(let i=1; i<=maxRight; i++) {
        if(b[r-i][c+i]) {
            return false;
        }
    }

    return true;
}

function display(b) {
    console.log(
        b.map((i) => {
            let rowString = i.map(cell => cell ? 'Q' : 'X').join(' ');
            return rowString
        }).join('\n')
    );
}

console.log(nQueens(create2DArray(4, 4, false), 0));
