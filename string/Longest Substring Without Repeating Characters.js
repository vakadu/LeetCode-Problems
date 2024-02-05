// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

var lengthOfLongestSubstring = function(s) {
    let set = new Set(), left = 0, max = 0;

    for(let i=0; i<s.length; i++) {

        while(set.has(s[i])) {
            set.delete(s[left]);
            max = Math.max(max, i-left+1);
            left++;
        }

        set.add(s[i]);
        console.log(set, left);

    }


    // let currStr="", max=0, found=false;

    // for(let i=0; i<s.length;i++) {

    //     for(let j=0; j<currStr.length; j++) {
    //         if(s[i] === currStr[j]) {
    //             found = true;
    //             max = Math.max(max, currStr.length);
    //             currStr = currStr.substring(j+1);
    //             break;
    //         }
    //     }

    //     if(found) {
    //         found = false;
    //         currStr += s[i]
    //     } else {
    //         currStr += s[i]
    //     }
    // }

    // console.log(currStr, max);
};

lengthOfLongestSubstring("abcabcbb");
