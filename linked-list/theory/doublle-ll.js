class Node {
    constructor(val, next, prev) {
        this.val = val;
        this.next = next ? next : null;
        this.prev = prev ? prev : null;
    }
}

class DoubleLL {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    insertFirst(val) {
        let node = new Node(val);

        node.next = this.head;
        node.prev = null;
        if(this.head !== null) {
            this.head.prev = node;
        }
        this.head = node;
        this.size++;
    }

    add(val) {
        let current = this.head, node = new Node(val);
        while(current.next) {
            current = current.next;
        }
        node.next = null;
        node.prev = current;
        current.next = node;
    }

    insertAt(val, index) {
        let current = this.head, node = new Node(val), count = 0, temp;

        while(count < index) {
            temp = current;
            current = current.next;
            count++;
        }

        temp.next = node;
        node.next = current;
        current.prev = node;
        node.prev = temp;
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

let list = new DoubleLL();
list.insertFirst(1);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.insertAt(10, 3);
list.display();
