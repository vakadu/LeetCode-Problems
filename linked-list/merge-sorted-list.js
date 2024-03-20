import { arrayToLL } from "../utils";

function ListNode (val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function mergeSortedList(head1, head2) {
    let result = new ListNode(), current = result;

    while(head1 && head2) {
        if(head1.val < head2.val) {
            current.next = head1;
            head1 = head1.next;
        } else {
            current.next = head2;
            head2 = head2.next;
        }
    }

    console.log(result);
}

let l1 = arrayToLL([1,2]);
let l2 = arrayToLL([1,4]);
mergeSortedList(l1, l2);
