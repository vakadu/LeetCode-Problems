function twoDArray(r) {
    let arr = new Array(r);

    for(let i=0; i<r; i++) {
        arr[i] = new Array(r).fill(false)
    }

    return arr;
}

function nQueens(n) {
    let arr = twoDArray(n);
    let result =  helper(arr, 0);
    return result;
}

function display(bo) {
    let result = bo.map((b) => {
        return b.map((cell) => cell ? 'Q' : '.').join('')
    });
    return result;
}

function helper(board, row) {
    let soultions = [];
    if(row === board.length) {
        let dis = display(board);
        soultions.push(dis);
        return soultions;
    }

    for(let col=0; col < board.length; col++) {
        if(isSafe(board, row, col)) {
            board[row][col] = true;
            soultions = soultions.concat(helper(board, row+1));
            board[row][col] = false;
        }
    }

    return soultions;
}

function isSafe(b, r, c) {

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

    let maxRight = Math.min(r, b.length - c - 1);
    for(let i=1; i<=maxRight; i++) {
        if(b[r-i][c+i]) {
            return false;
        }
    }

    return true;
}

console.log(nQueens(5));
