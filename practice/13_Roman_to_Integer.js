const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function rti(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let current = romans[s[i]],
            next = romans[s[i + 1]];

        if (current < next) {
            let temp = next - current;
            result += temp;
            i++;
        } else {
            result += current;
        }
    }

    return result;
}

console.log(rti('III'));
console.log(rti('LVIII'));
// console.log(rti('MCMXCIV'));
