function palindrome(x) {
    // let rev = Number(x.toString().split('').reverse().join(''));
    // return x===rev

    let temp = x.toString(), i=0, j=temp.length-1;

    while(i<j) {
        if(temp[i] === temp[j]) {
            i++;
            j--;
        } else {
            return false;

        }
    }
    return true
}

console.log(palindrome(121));
console.log(palindrome(-121));
