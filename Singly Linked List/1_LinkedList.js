/*
Write a JavaScript program to create and display a Singly Linked List.
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
    }

    add(value) {
        if (value === undefined || value === null) {
            return "Value cannot be undefined or null";
        };
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
            return "Empty linked list"
        }
        let result = "";
        let current = this.head;
        while (current) {
            result += current.value;
            if (current.next) {
                result += " -> ";
            }
            current= current.next;
        }
        return result + " -> null";
    }
}

const linkedList = new SinglyLinkedList();
console.log(linkedList.add(1));
console.log(linkedList.add(2));
console.log(linkedList.add(3));
console.log(linkedList.add(4));
console.log(linkedList.display());