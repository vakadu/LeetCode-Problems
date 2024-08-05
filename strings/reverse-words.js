function reverseWords(s) {
    s = s.trim();
    s = s
        .split(' ')
        .filter((i) => {
            return i !== '';
        })
        .reverse()
        .join(' ');

    console.log(s);
}

console.log(reverseWords('  hello world  '));
console.log(reverseWords('a good   example'));
