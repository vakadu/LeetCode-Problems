function beauty(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let map = new Map();
        for (let j = i; j < s.length; j++) {
            map = map.set(s[j], map.get(s[j]) + 1 || 1);

            if (map.size > 1) {
                // let temp = Array.from(map).sort((a, b) => b[1] - a[1]);

                // let diff = temp[0][1] - temp[temp.length - 1][1];
                // if (diff >= 1) {
                //     count += diff;
                // }

                let freqs = Array.from(map.values());
                let max = Math.max(...freqs);
                let min = Math.min(...freqs);

                count += max - min;
            }
        }
    }

    return count;
}

console.log(beauty('aabcb'));
console.log(beauty('aabcbaa'));
