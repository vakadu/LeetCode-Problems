function happyNumber(n) {
    let set = new Set(), number = n.toString();

    while(!set.has(number)) {
        let total = 0;
        for(let num of number) {
            total += Math.pow(num, 2);
        }

        if(total === 1) {
            return true;
        }

        set.add(number);
        number = total.toString();
    }

    return false
}

// function helper(sum) {
//     let total = 0;

    // for(let num of sum.toString()) {
    //     total += Math.pow(num, 2);
    // }

//     if(total.toString().length === 1) {
//         if(total === 1) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     return helper(total);
        
// }

console.log(happyNumber(1111111));
