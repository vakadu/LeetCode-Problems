function lemonade(bills) {
    let five = 0,
        ten = 0;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++;
        } else if (bills[i] === 10) {
            if (five >= 1) {
                ten++;
                five--;
            } else {
                return false;
            }
        } else {
            if (five >= 1 && ten >= 1) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
}

console.log(lemonade([5, 5, 5, 10, 20]));
console.log(lemonade([5, 5, 10, 10, 20]));
