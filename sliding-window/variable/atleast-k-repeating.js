function kRepeating(s, k) {
    let map = new Map();

    for(let i=0; i<s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    console.log(map);
}

kRepeating("ababbc", 2);
