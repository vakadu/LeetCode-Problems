export const create2DArray = (rows, colums, defaultValue) => {
    const array = new Array(rows);

    for(let i=0; i<rows; i++) {
        array[i] = new Array(colums).fill(defaultValue);
    }
    return array;
}

function ListNode (val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

export const arrayToLL = (arr) => {
    let head = new ListNode(arr[0]), current = head;
    for(let i=1; i<arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}
