class ListNode<T>{
    constructor(public value: T, public next?: ListNode<T>){
        
    }
}

class LinkedList<T>{
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0;

    add(value: T){
        const newNode = new ListNode(value);
        if(!this.root || !this.tail){
            this.root = newNode;
            this.tail = this.root;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
}

const numberList = new LinkedList<number>();
const nameList = new LinkedList<string>();
