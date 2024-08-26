const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;

    let heap = new MinPriorityQueue(),
        map = new Map();

    for (let card of hand) {
        map.set(card, (map.get(card) || 0) + 1);
    }

    for (let key of map.keys()) {
        heap.enqueue(key);
    }

    while (heap.size() > 0) {
        let top = heap.dequeue().element;

        for (let i = 0; i < groupSize; i++) {
            let card = top + i;

            if (!map.has(card)) {
                return false;
            }

            map.set(card, map.get(card) - 1);

            if (map.get(card) === 0) {
                map.delete(card);
            }
        }
    }

    return true;

    // let result = [],
    //     temp = [],
    //     temps = [];

    // for (let index = 0; index < hand.length; index++) {
    //     heap.enqueue(hand[index]);
    // }

    // while (heap.size() > 0) {
    //     let top = heap.dequeue();

    //     if (temp.includes(top.element)) {
    //         temps.push(top.element);
    //     } else {
    //         temp.push(top.element);
    //     }

    //     if (temp.length === groupSize) {
    //         result.push(temp);
    //         temp = [];
    //         if (temps.length > 0) {
    //             temp = [...temps];
    //             temps = [];
    //         }
    //     }
    // }

    // if (result.flat().length === hand.length) {
    //     return true;
    // } else {
    //     return false;
    // }
};

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
console.log(isNStraightHand([1, 2, 3, 4, 5], 4));
console.log(isNStraightHand([8, 10, 12], 3));
