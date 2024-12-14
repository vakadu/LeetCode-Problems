function atoi(s) {
    s = s.trim();
    let i = 0,
        result = 0,
        sign = 1;

    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    while (i < s.length && !isNaN(Number(s[i])) && s[i] !== ' ') {
        result = result * 10 + Number(s[i]);
        i++;
    }

    result = result * sign;
    const IntMax = Math.pow(2, 31) - 1;
    const IntMin = -Math.pow(2, 31);

    if (result > IntMax) return IntMax;
    if (result < IntMin) return IntMin;
    return result;
}

// console.log(atoi(' -042'));
// console.log(atoi('42'));
// console.log(atoi('1337c0d3'));
// console.log(atoi('0-123'));
// console.log(atoi('words and 987'));
// console.log(atoi('4193 with words'));
// console.log(atoi('-91283472332'));
// console.log(atoi('+1'));
