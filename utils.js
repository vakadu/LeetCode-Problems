export const create2DArray = (rows, colums, defaultValue) => {
    const array = new Array(rows);

    for(let i=0; i<rows; i++) {
        array[i] = new Array(colums).fill(defaultValue);
    }
    return array;
}