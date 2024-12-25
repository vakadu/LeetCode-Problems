function strStr(haystack, needle) {
    for (let index = 0; index < haystack.length; index++) {
        let temp = haystack.slice(index, index + needle.length);
        if (temp === needle) {
            return index;
        }
    }

    return -1;
}

console.log(strStr('sadbutsad', 'sad'));
