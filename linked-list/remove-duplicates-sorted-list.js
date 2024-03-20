function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function removeDuplicates(head) {

    let temp = head;

    while(temp.next) {
        if(temp.val === temp.next.val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next
        }
    }
    console.log(head);
}

function arrayToLL(arr) {
    let head = new ListNode(arr[0]), current = head;
    for(let i=1; i<arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

let head = arrayToLL([1,1,1,2]);
removeDuplicates(head);
