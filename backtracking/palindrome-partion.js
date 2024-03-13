function palindrome(str) {
    let l = 0;
    let r = str.length - 1;
    while(l < r){
        if(str[l++] != str[r--]){
            return false;
        }
    }
    return true;
}

var partition = function(str) {
    let result = [];
    partitionHelper(str, [], result);
    return result;
};

function partitionHelper(s, temp, result) {
    if(s === "") {
        result.push([...temp]);
        return result;
    }

    for(let i=0; i<s.length; i++) {
        let sl = s.slice(0, i+1);

        if(palindrome(sl)) {
            temp.push(sl);
            partitionHelper(s.slice(i+1), temp, result);
            temp.pop();
        }
    }
}

console.log(partition("aab"));
