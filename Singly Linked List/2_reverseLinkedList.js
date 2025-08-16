/*
Write a JavaScript program to create a singly linked list of n nodes and display it in reverse order.
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
    }

    add(value) {
        if (value === undefined || value === null) {
            return "Value cannot be undefined or null";
        }
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        return this;
    }

    display() {
        if (!this.head) {
            return "Empty linked list";
        }
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value;
            if (current.next) {
                result += " -> ";
            }
            current = current.next;
        }
        return result + " -> null";
    }

    reverse() {
        if (!this.head) {
            return "Empty linked list";
        }
        const reverseHelper = (node) => {
            if (!node) {
                return ""
            }
            const nextPart = reverseHelper(node.next);
            return (nextPart ? nextPart + " -> " : "") + node.value;
        }
        const result = reverseHelper(this.head) + " -> null";
        return result
    }
}

const linkedList = new SinglyLinkedList();
console.log(linkedList.add(1));
console.log(linkedList.add(2));
console.log(linkedList.add(3));
console.log(linkedList.add(4));
console.log(linkedList.display());
console.log(linkedList.reverse());