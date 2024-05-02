function maxChar(s, k) {
    let maxFreq = 0, i=0, j=0, map = new Map(), longest = 0;

    while(j<s.length) {
        map.set(s[j], map.get(s[j]) + 1 || 1);
        maxFreq = Math.max(maxFreq, map.get(s[j]));

        if((j-i+1 - maxFreq) > k) {
            map.set(s[i], map.get(s[i]) - 1);
            i++;
        }
        longest = Math.max(longest, j-i+1);
        j++;
    }

    return longest;
}

maxChar("ABAB", 2);
