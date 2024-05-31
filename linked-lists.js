class LinkedList {
    constructor() {
        this.head = null;
    }

    append = (value) => {
        const node = new Node();
        node.value = value;
        if(this.head === null) {this.head = node; return;}
        let current = this.head;
        while (current.nextNode != null) {
            current = current.nextNode;
        }
        current.nextNode = node;
    }
}

class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }
}


const list = new LinkedList();
list.append('hey');
list.append('yo');
list.append('hey ho');
list.append('lesgo');

console.log(list);