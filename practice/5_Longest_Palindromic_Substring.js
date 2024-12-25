function longestPalindrome(s) {
    // let result = '';

    // for (let i = 0; i < s.length; i++) {
    //     for (let j = i; j < s.length; j++) {
    //         let check = isPalindrome(s, i, j);
    //         if (check) {
    //             let slicedStr = s.slice(i, j + 1);
    //             if (slicedStr.length > result.length) {
    //                 result = slicedStr;
    //             }
    //         }
    //     }
    // }

    // return result;

    let n = s.length;
    if (n <= 1) return s;

    const dp = Array.from({ length: n }, () => Array(n).fill(false));
    let start = 0,
        maxLen = 1;

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLen = 2;
        }
    }

    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            if (s[i] === s[j]) {
                dp[i][j] = true;
                start = i;
                maxLen = len;
            }
        }
    }

    return s.slice(start, start + maxLen);

    // console.log(dp, start, maxLen);
}

function isPalindrome(s, i, j) {
    while (i < j) {
        if (s[i] === s[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }

    return true;
}

// console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('ac'));
