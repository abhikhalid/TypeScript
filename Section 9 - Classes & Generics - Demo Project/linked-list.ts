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

    getNumberOfElements() {
        return this.length;
    }

    print(){
        let current = this.root;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}

const numberList = new LinkedList<number>();
numberList.add(10);
numberList.add(5);
numberList.add(-3);

console.log(numberList.getNumberOfElements());
numberList.print();

//run 'tsc' that compiles the code
// run 'node linked-list.js' to see the output


const nameList = new LinkedList<string>();
