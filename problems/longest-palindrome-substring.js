function recursion(s) {
    return helper(s, 0, s.length)
}

function isPalindrome(s, start, end) {
    while(start<end) {
        if(s[start] === s[end]) {
            start++;
            end--;
        } else {
            return false
        }
    }
    return true
}

function helper(s,start, end) {
    if(start > end) {
        return ""
    }

    if(isPalindrome(s, start, end)) {
        return s.substring(start, end+1)
    }

    const sub1 = helper(s, start+1, end);
    const sub2 = helper(s, start, end-1);

    return sub1.length > sub2.length ? sub1 : sub2
}

function memoize(s) {
    let table = new Array(s.length)
		.fill("")
		.map(() => new Array(s.length).fill(""));
    return mem(s, 0, s.length-1, table)
}

function mem(s,start, end, table) {
    if(table[start][end] !== ""){
        return table[start][end]
    }

    if(start > end) {
        return ""
    }

    if(isPalindrome(s, start, end)) {
        table[start][end] = s.slice(start, end+1)
        return table[start][end]
    }

    const sub1 = mem(s, start+1, end,table);
    const sub2 = mem(s, start, end-1,table);

    table[start][end] =  sub1.length > sub2.length ? sub1 : sub2;
    return table[start][end]
}

function dp(s) {
    let table = new Array(s.length+1)
		.fill("")
		.map(() => new Array(s.length+1).fill(""));

    
    for(let i=1; i<s.length; i++) {
        for(let j=s.length-1; j>=1; j++) {
            if(isPalindrome(s, i-1, j+1)) {
                table[i][j] = s.slice(i-1, j+1)
            } else {
                if(table[i+1][j].length > table[i][j-1].length) {
                    table[i][j] = table[i+1][j]
                } else {
                    table[i][j] = table[i][j-1]
                }
            }
        }
    }

    return table[s.length][s.length]
}

// function mem(s,start, end, memo={}) {
//     let key = `${start}-${end}`;

    // if(key in memo){
    //     return memo[key]
    // }

    // if(start > end) {
    //     return ""
    // }

    // if(isPalindrome(s, start, end)) {
    //     memo[key] = s.slice(start, end+1)
    //     return memo[key]
    // }

    // const sub1 = mem(s, start+1, end);
    // const sub2 = mem(s, start, end-1);

    // memo[key] =  sub1.length > sub2.length ? sub1 : sub2;
    // return memo[key]
// }

// console.log(recursion("babad"));
console.log(dp("babad"));//bab
// console.log(recursion("aacabdkacaa"));//aca

