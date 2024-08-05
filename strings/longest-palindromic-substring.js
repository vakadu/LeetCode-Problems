function recursion(s) {
    const revStr = s.split('').reverse().join('');
    return helper(s, revStr, s.length, s.length);
}

function helper(s, s1, m, n) {
    if (m <= 0 || n <= 0) {
        return '';
    }

    if (s[m - 1] === s1[n - 1]) {
        return s[m - 1] + helper(s, s1, m - 1, n - 1);
    } else {
        let sub1 = helper(s, s1, m - 1, n);
        let sub2 = helper(s, s1, m, n - 1);

        return sub1.length > sub2.length ? sub1 : sub2;
    }
}

function isPalindrome(s, start, end) {
    while (start < end) {
        if (s[start] === s[end]) {
            start++;
            end--;
        } else {
            return false;
        }
    }
    return true;
}

// console.log(recursion('babad'));
// console.log(recursion('cbbd'));
console.log(recursion('aacabdkacaa'));
