const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var carPooling = function (trips, capacity) {
    trips.sort((a, b) => a[1] - b[1]);
    let sum = 0,
        heap = new MinPriorityQueue({ priority: (x) => x[2] });

    for (let i = 0; i < trips.length; i++) {
        console.log(heap);

        while (heap.size() > 0 && heap.front().priority <= trips[i][1]) {
            sum -= trips[i][0];
            heap.dequeue();
        }

        sum += trips[i][0];
        if (sum > capacity) {
            return false;
        }
        heap.enqueue(trips[i]);
    }

    return true;

    console.log(trips);

    // let sum = trips[0][0],
    //     startTime = trips[0][1],
    //     endTime = trips[0][2];

    // console.log(trips);

    // for (let i = 1; i < trips.length; i++) {
    //     if (trips[i][1] < endTime) {
    //         sum += trips[i][0];

    //         if (trips[i][1] > startTime && trips[i][2] < endTime) {
    //             sum -= trips[i][0];
    //         }

    //         if (sum > capacity) {
    //             return false;
    //         }
    //     } else {
    //         endTime = trips[i][2];
    //     }
    // }

    // return true;
};

console.log(
    carPooling(
        [
            [10, 5, 7],
            [10, 3, 4],
            [7, 1, 8],
            [6, 3, 4],
        ],
        23
    )
);

// console.log(
//     carPooling(
//         [
//             [2, 1, 5],
//             [3, 3, 7],
//         ],
//         4
//     )
// );

// console.log(
//     carPooling(
//         [
//             [2, 1, 5],
//             [3, 3, 7],
//         ],
//         5
//     )
// );
