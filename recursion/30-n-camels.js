function createNArray(r, c, d) {
    let arr = new Array(r);

    for(let i=0; i<r; i++) {
        arr[i] = new Array(c).fill(d);
    }

    return arr;
}

function display(b) {
    let bo = b.map((row) => {
        let cell = row.map((i) => i ? 'C' : 'X').join(' ');
        return cell;
    }).join('\n')
    console.log(bo);
}

function nCamels(board, row) {
    if(row === board.length) {
        display(board);
        return;
    }

    for(let col = 0; col < board.length; col++) {
        if(isSafe(board, row, col)) {
            board[row][col] = true;
            nCamels(board, row + 1);
            board[row][col] = false;
        }
    }
}

function isSafe(b, r, c) {

    let maxLeft = Math.min(r,c);
    for(let i=1; i<=maxLeft; i++) {
        if(b[r-i][c-i]) {
            return false;
        }
    }

    let maxRight = Math.min(r, b.length - c - 1);
    for(let i=1; i<=maxRight; i++) {
        if(b[r-i][c+i]) {
            return false;
        }
    }

    return true;
}

nCamels(createNArray(4,4,false), 0)
