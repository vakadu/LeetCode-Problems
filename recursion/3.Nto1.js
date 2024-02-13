function nToOne(n) {
    if(n === 1) {
        return '1';
    }

    let result = n + nToOne(n-1);
    return result;
}

nToOne(4)