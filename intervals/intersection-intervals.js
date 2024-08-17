function intersection(firstList, secondList) {
    let i = 0,
        j = 0,
        result = [];

    while (i < firstList.length && j < secondList.length) {
        let start = Math.max(firstList[i][0], secondList[j][0]),
            end = Math.min(firstList[i][1], secondList[j][1]);

        if (start <= end) {
            result.push([start, end]);
        }

        if (firstList[i][1] <= secondList[j][1]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}

console.log(
    intersection(
        [
            [0, 2],
            [5, 10],
            [13, 23],
            [24, 25],
        ],
        [
            [1, 5],
            [8, 12],
            [15, 24],
            [25, 26],
        ]
    )
);
