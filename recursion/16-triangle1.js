function triangle1(n) {

    helper(n, 0, '')
}

function helper(row, colum, stars) {
    if(row === 0) {
        return;
    }

    if(colum < row) {
        helper(row, colum + 1, stars + '*');
    } else {
        // console.log(stars)
        // * * * *
        // * * *
        // * *
        // *
        helper(row - 1, 0, '');
        console.log(stars)
        // *
        // * *
        // * * *
        // * * * *
    }
}

triangle1(4);
