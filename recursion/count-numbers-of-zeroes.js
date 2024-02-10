function countNumbers(number) {
    helper(number, 0)
}

function helper(number, count) {
    if(number === 0) {
        return count;
    }

    let remainder = number % 10;
    if(remainder === 0) {
        count++;
        return helper(Math.floor(number/10), count++);
    } else {
        return helper(Math.floor(number/10), count);
    }

}

countNumbers(30204);
