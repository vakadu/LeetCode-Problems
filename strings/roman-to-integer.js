const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

var romanToInt = function (s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let curr = romans[s[i]],
            next = romans[s[i + 1]];

        if (curr < next) {
            let temp = next - curr;
            count += temp;
            i++;
        } else {
            count += curr;
        }
    }

    return count;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
