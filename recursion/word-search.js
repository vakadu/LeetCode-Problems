function backTrack(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (helper(board, word, i, j, 0)) {
                return true;
            }
        }
    }

    return false;
}

function helper(b, w, r, c, k) {
    if (k === w.length) {
        return true;
    }

    if (
        r < 0 ||
        c < 0 ||
        r >= b.length ||
        c >= b[r].length ||
        b[r][c] !== w[k]
    ) {
        return false;
    }

    let temp = b[r][c];
    b[r][c] = '';

    let found =
        helper(b, w, r + 1, c, k + 1) ||
        helper(b, w, r - 1, c, k + 1) ||
        helper(b, w, r, c + 1, k + 1) ||
        helper(b, w, r, c - 1, k + 1);

    b[r][c] = temp;

    return found;
}

console.log(
    backTrack(
        [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ],
        'SEE'
    )
);

console.log(
    backTrack(
        [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ],
        'ABCCED'
    )
);

console.log(
    backTrack(
        [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ],
        'ABCB'
    )
);
