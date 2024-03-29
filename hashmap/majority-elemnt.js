// function majorityElement(nums) {
//     let map = new Map(), max = 0, result = 0;

    // for(let num of nums) {
    //     if(map.has(num)) {
    //         map.set(num, map.get(num) + 1)
    //     } else {
    //         map.set(num, 1)
    //     }
    // }

//     for(let [key, value] of map) {
//         console.log(key, value);
//         if(value > max) {
//             max = value;
//             result = key;
//         }
//     }

//     return result;
// }

// majorityElement([3,2,3]);

function majorityElement(nums) {
    let check = Math.floor(nums.length/3), map = new Map(), result = [];

    for(let num of nums) {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    
    for(let [key, value] of map) {
        if(value > check) {
            result.push(key);
        }
    }

    console.log(result);
}

majorityElement([1,2]);

