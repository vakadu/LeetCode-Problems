// https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/description/

var beautifulIndices = function(s, a, b, k) {
    let aIndices = kmp(s, a), bIndices = kmp(s, b), match=[];

    for(let a of aIndices) {
        for(let b of bIndices) {
            if(Math.abs(a-b) <= k) {
                match.push(a);
                break;
            }
        }
    }
    return match;
};


beautifulIndices("isawsquirrelnearmysquirrelhouseohmy", "my", "squirrel", 15)

function kmp(str, substr) {
    let lps = getLPS(substr);
    let i=0; j=0; m=str.length; n=substr.length, match=[];

    while(i<m) {
        if(str[i] === substr[j]) {
            i++;
            j++;
            if(j===n) {
                match.push(i-n)
            }
        } else if(j>0) {
            j = lps[j-1];
        } else {
            i++;
        }
    }
    return match;
}

kmp("abc abcdab abcdabcdabde", "abcdabd");

function getLPS(pattern) {
    let lps = new Array(pattern.length).fill(0);
    let i = 0;
    let j = 1;

    while (j < pattern.length) {
        if (pattern[j] == pattern[i]) {
            i++;
            lps[j] = i;
            j++;
        } else {
            if (i != 0) {
                i = lps[i - 1];
            } else {
                lps[j] = 0;
                j++;
            }
        }
    }
    return lps
}

// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

var strStr = function(haystack, needle) {
    let match = kmp(haystack, needle);
    if(match && match.length > 0) {
        return match[0]
    } else {
        return -1
    }


    // for(let i=0; i<haystack.length; i++) {
    //     let str = "";

    //     for(let j=i; j<i+needle.length; j++) {
    //         console.log(i, j);
    //         str += haystack[j]
    //     }

    //     console.log(str)
    // }
    
    // for(let i=0; i<haystack.length; i++) {
    //     let k = i;
    //     j = 0;

    //     while(haystack[k] === needle[j] && j < needle.length) {
    //         console.log(i, j, k);
    //         j++;
    //         k++;
    //     }

    //     if(needle.length === j) {
    //         console.log(i)
    //         return i
    //     }
    // }

    // return -1;
};
// i j k
// 0 0 0
// 0 1 1
// 0 2 2
// 1 3 3

// 012345678
// sadbutsad

strStr("leetcode", "leeto")
