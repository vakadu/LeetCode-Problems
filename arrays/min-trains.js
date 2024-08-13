function minTrains(arr, dep) {
    arr.sort();
    dep.sort();

    console.log(arr, dep);
}

console.log(
    minTrains(
        [900, 945, 955, 1100, 1500, 1800],
        [920, 1200, 1130, 1150, 1900, 2000]
    )
);
