function greedy(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let left = 0,
        right = 0,
        max = 0;

    while ((left < g.length) & (right < s.length)) {
        if (s[right] >= g[left]) {
            left++;
            max++;
        }
        right++;
    }

    return max;
}

console.log(greedy([1, 2, 3], [1, 1]));
console.log(greedy([1, 2], [1, 2, 3]));
