class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class CircularLL {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    add(val) {
        let node = new Node(val);

        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.next = this.head;
            this.tail = node;
        }
        this.size++;
    }

    display() {
        let current = this.head, str = "";
        while(current !== this.tail) {
            str += current.val + " -> ";
            current = current.next;
        }
        console.log(str);
    }
}

let list = new CircularLL();
list.add(1);
list.add(2);
list.display();
