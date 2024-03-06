import { create2DArray } from "../utils";

function nKnights(board, row) {
    if(row === board.length) {
        display(board);
        return;
    }

    for(let col=0; col<board.length; col++) {
        console.log(board, row, col);
        if(isSafe(board, row, col)) {
            board[row][col] = true;
            nKnights(board, row+1);
            board[row][col] = false;
        }
    }
}

function isSafe(b, r , c) {

    if(isValid(b, r-2, c+1)) {
        if(b[r-2][c+1]) {
            return false
        }
    }

    if(isValid(b, r-2, c-1)) {
        if(b[r-2][c-1]) {
            return false
        }
    }

    if(isValid(b, r-1, c+2)) {
        if(b[r-1][c+2]) {
            return false
        }
    }

    if(isValid(b, r-1, c-2)) {
        if(b[r-1][c-2]) {
            return false
        }
    }

    return true;
}

function isValid(b, r , c) {
    if(r >=0 && r<b.length && c>=0 && c<b.length) {
        return true;
    }
    return false;
}

function display(b) {
    console.log(
        b.map((i) => {
            let rowString = i.map(cell => cell ? 'K' : 'X').join(' ');
            return rowString
        }).join('\n')
    );
}

nKnights(create2DArray(4,4, false), 0);
