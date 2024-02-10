let sum = 0;

function reverseNumber(n) {

    // if(n === 0) {
    //     return
    // }

    ////// 1 ////////
    // let result = n%10;
    // sum = sum += result;
    // reverseNumber(Math.floor(n/10));
    // return Number(sum);

    ////// 2 ////////
    // let remainder = n%10;
    // sum = sum * 10 + remainder;
    // reverseNumber(Math.floor(n/10));
    // console.log(sum);

    ////// 3 ////////

    if(n%10 === n) {
        return n;
    }

    let remainder = n%10;
    let result = (remainder * Math.pow(10, n.toString().length - 1)) + reverseNumber(Math.floor(n/10));
    console.log(result);
    return result

}

reverseNumber(65678);
