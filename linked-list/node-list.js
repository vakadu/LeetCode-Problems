class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next ? next : null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    insertFirst(val) {
        let node = new Node(val), temp;

        temp = this.head;
        this.head = node;
        node.next = temp;

        this.size = this.size + 1;
    }

    insertAt(val, index) {
        let node = new Node(val), current = this.head, prev, count = 0;

        if(index === 0) {
            this.insertFirst(val);
        } else {
            while(count < index) {
                prev = current;
                current = current.next;
                count++;
            }
    
            node.next = current;
            prev.next = node;
            this.size++;

        }
 
    }

    add(val) {
        let node = new Node(val), current = this.head;

        if(!this.head) {
            this.insertFirst(val);
        } else {
            while(current.next) {
                current = current.next;
            }
            current.next = node;
            this.size++;
        }
    }

    deleteFirst() {
        let temp = this.head.next;
        if(this.head) {
            this.head = temp;
            this.size--;    
        }
    }

    deleteAt(index) {
        let current = this.head, prev, count = 0;

        if(index === 0) {
            this.deleteFirst();
        } else {
            while(count < index) {
                prev = current;
                current = current.next;
                count++;
            }
            current = current.next;
            prev.next = current;
            
            this.size--;
        }
    }

    deleteLast() {
        let count = 1, current = this.head;
        while(count < this.size - 1) {
            current = current.next;
            count++;
        }
        current.next = null;
        this.size--;
    }

    display() {
        let current = this.head, str = "";
        while(current) {
            str += current.val + " -> ";
            current = current.next;
        }
        console.log(str);
    }
}

let list = new LinkedList();
list.insertFirst(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.insertAt(21, 2);
// list.deleteFirst();
// list.deleteAt(3);
list.deleteLast();

list.display();
