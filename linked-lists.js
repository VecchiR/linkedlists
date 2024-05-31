class LinkedList {
    constructor() {
        this.head = null;
    }

    append = (value) => {
        const node = new Node();
        node.value = value;
        if(this.head === null) {this.head = node;}
        else {
            return;
        }
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

console.log(list);