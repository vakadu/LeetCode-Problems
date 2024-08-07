function nqueen(n) {
    let table = new Array(n).fill(false).map(() => new Array(n).fill(false));
    let result = [];
    backtrack(table, 0, result);
    return result;
}

function backtrack(table, row, result) {
    if (row === table.length) {
        result.push(display(table));
        return;
    }

    for (let i = 0; i < table[0].length; i++) {
        if (isValid(table, row, i)) {
            table[row][i] = true;
            backtrack(table, row + 1, result);
            table[row][i] = false;
        }
    }
}

function isValid(t, r, c) {
    //vertical
    for (let i = 0; i < r; i++) {
        if (t[i][c]) {
            return false;
        }
    }

    //left diagonal
    // let min = Math.min(r, c);
    for (let i = 1; r - i >= 0 && c - i >= 0; i++) {
        if (t[r - i][c - i]) {
            return false;
        }
    }

    //right diagonal
    // let max = Math.max(r, t.length - c - 1);
    for (let i = 1; r - i >= 0 && c + i < t.length; i++) {
        if (t[r - i][c + i]) {
            return false;
        }
    }

    return true;
}

function display(table) {
    let board = table.map((row) => {
        return row.map((val) => {
            return val ? 'Q' : '.';
        });
    });
    return board;
}

console.log(nqueen(4));
