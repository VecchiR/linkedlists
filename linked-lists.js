class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const node = new Node();
        node.value = value;
        if(this.head === null) {this.head = node; return;}
        let current = this.head;
        while (current.nextNode != null) {
            current = current.nextNode;
        }
        current.nextNode = node;
    }

    prepend(value) {
        const node = new Node();
        node.value = value;
        node.nextNode = this.head;
        this.head = node;
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
list.append('hey ho');
list.append('lesgo');
list.prepend('thisfirst');

console.log(list);