function longest(s) {
    let i=0, j=0, map = new Map(), max = 0;

    while(j<s.length) {
        map.set(s[j], map.get(s[j]) + 1 || 1);

        if(map.get(s[j]) > 1) {
            while(map.get(s[j])>1) {
                map.set(s[i], map.get(s[i])-1);
                i++;

            }
            j++;
        } else {
            max = Math.max(max, j-i+1)
            j++;
        }
    }

    return max;
}

console.log(longest("abcabcbb"));
console.log(longest("bbbbb"));
console.log(longest("pwwkew"));

