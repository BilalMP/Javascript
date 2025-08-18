/*
Write a JavaScript program to get a node in an existing singly linked list.
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.index = -0;
    }

    add(value) {
        if (value === undefined || value === null) {
            return "Value cannot be undefined or null";
        }
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.index++;
            return this;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.index++;
        return this;
    }

    display() {
        if (!this.head) {
            return "Empty linked list";
        }
        let result = "";
        let current = this.head;
        while (current) {
            result += current.value;
            if (current.next) {
                result += " -> ";
            }
            current = current.next;
        }
        return result + " -> null";
    }

    getNode(position) {
        if (
            !Number.isInteger(position) ||
            position < 0 ||
            position > this.index
        ) {
            return `Index must be an integer between 0 and ${this.index}`;
        }
        let current = this.head;
        for (let i = 0; i < position - 1; i++) {
            current = current.next;
        }
        return current;
    }
}

const linkedList = new SinglyLinkedList();
console.log(linkedList.add(1));
console.log(linkedList.add(2));
console.log(linkedList.add(3));
console.log(linkedList.add(4));
console.log(linkedList.display());
console.log(linkedList.getNode(2));
