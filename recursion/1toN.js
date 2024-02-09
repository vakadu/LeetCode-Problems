function oneToN(n) {
    if(n === 1) {
        return '1';
    }

    let result = oneToN(n-1) + n;
    return result;
}

oneToN(4)
