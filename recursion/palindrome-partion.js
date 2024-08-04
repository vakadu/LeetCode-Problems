var partition = function(s) {
    return helper(s, 0, [], [])
};

function helper(s, start, temp, result) {
    

    for(let i=start; i<s.length; i++) {
        if(isPalindrome(s, start, i)) {
            // temp.push(s.slice(start, i+1));
            // // helper(s, i+1, temp, result);
            // temp.pop()
        }
    }

}

function isPalindrome(s, start, end) {
    while(start < end) {
        if(s[start] === s[end]) {
            start++;
            end--;
        } else {
            return false;
        }
    }

    return true;
}

console.log(partition("aab"));
