function longest(s) {
    let i=0, j=0, map = new Map(), max = 0;

    if(s.length === 0) {
        return 0
    }

    if(s.length === 1) {
        return 1
    }

    // while(j < s.length) {
    //     map = map.set(s[j], map.get(s[j]) + 1 || 1);

    //     if(map.has(s[j]) && map.get(s[j]) > 1) {
    //         while(map.get(s[j]) > 1) {
    //             map.set(s[i], map.get(s[i]) - 1);
    //             max = Math.max(max, j-i);
    //             if(map.get(s[i]) <= 0) {
    //                 map.delete(s[i]);
    //             }
    //             i++;
    //         }
    //         j++;
    //     } else {
    //         max = Math.max(max, j-i+1);
    //         j++;
    //     }
    // }

    while(j < s.length) {
        map = map.set(s[j], map.get(s[j]) + 1 || 1);

        if(map.size === j-i+1) {
            max = Math.max(max, j-i+1);
            j++;
        } else if(map.size < j-i+1) {
            while(map.size < j-i+1) {
                map = map.set(s[i], map.get(s[i]) - 1);

                if(map.get(s[i]) <= 0) {
                    map.delete(s[i])
                }
                i++;
            }
            j++;
        } else {
            j++;
        }
    }

    return max
}

console.log(longest("abcabcbb"));
