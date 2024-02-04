// https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/description/

var minimumPushes = function(word) {
    let charMap = new Map();

    for(let char of word) {
        if(charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1)
        } else {
            charMap.set(char, 1);
        }
    }

    let arr = Array.from(charMap).sort((a,b) => b[1]-a[1]);

    console.log(arr, charMap);
    let count = 0, ans = 0;

    for(let val of arr){
        console.log(val);
        count++;

        if(count <= 8) {
            ans+=val[1];
        } else if(count <= 16) {
            ans+=(2*val[1])
        } else if(count <= 24) {
            ans+=(3*val[1])
        } else if(count <= 26) {
            ans+=(4*val[1])
        }
    }
    console.log(ans);
};

minimumPushes("abcde");
