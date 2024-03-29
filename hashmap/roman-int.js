let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function romanToInt(s) {
    console.log(s.length);
    let sum = 0;
    for(let i=0; i<s.length; i++) {
        if(map[s[i]] < map[s[i+1]]) {
            let temp = map[s[i+1]] - map[s[i]];
            sum += temp;
            i++;
        } else {
            sum += map[s[i]];
        }
    }

    return sum;
}

// console.log(romanToInt("MCMXCIV"));

function romanToInt2(num) {
    console.log(Math.floor(num%10));
}

console.log(romanToInt2(1994));
