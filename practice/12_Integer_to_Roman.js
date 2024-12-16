const romnas = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
};

function itr(num) {
    let result = '',
        arr = Object.keys(romnas);

    for (let i = arr.length - 1; i >= 0; i--) {
        let val = Math.floor(num / romnas[arr[i]]);

        if (val > 0) {
            result += arr[i].repeat(val);
            num = num % romnas[arr[i]];
        }
        console.log(val);
    }
}

console.log(itr(3749));
