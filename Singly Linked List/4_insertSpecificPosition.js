/*
Write a JavaScript program to insert a node at any position in a Singly Linked List.
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
        this.index = 0;
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

    displayIndex() {
        return this.index;
    }

    addAtPostion(value, position) {
        if (value === undefined || value === null) {
            return "Value cannot be undefined or null";
        }
        if (!Number.isInteger(position) || position < 0 || position > this.index) {
            return `Position must be an integer between 0 and ${this.index}`;
        }
        const newNode = new Node(value);
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.index++;
            return this;
        }
        let current = this.head; 
        let prev = null;
        for (let i = 0; i < position; i++){
            prev = current;
            current = current.next;
        }
        prev.next = newNode;
        newNode.next = current;
        this.index++;
        return this;
    }
}

const linkedList = new SinglyLinkedList();
console.log(linkedList.add(1));
console.log(linkedList.add(2));
console.log(linkedList.add(3));
console.log(linkedList.add(4));
console.log(linkedList.display());
console.log(linkedList.addAtPostion(5, 2));
console.log(linkedList.display());
console.log(linkedList.displayIndex());
