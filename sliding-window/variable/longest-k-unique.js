function longest(s, k) {
    let i=0, j=0, max=-1, map = new Map();

    while(j<s.length) {
        map = map.set(s[j], map.get(s[j]) + 1 || 1);
        if(map.size === k) {
            max = Math.max(max, j-i+1);
            j++;
        } else if(map.size > k) {

            while(map.size > k) {
                map = map.set(s[i], map.get(s[i]) - 1);
                if(map.get(s[i]) <= 0) {
                    map.delete(s[i]);
                }

                i++;
            }
            
            j++;
        } else {
            j++;
        }
    }

    console.log(max);

}

longest("aaaa", 2);
