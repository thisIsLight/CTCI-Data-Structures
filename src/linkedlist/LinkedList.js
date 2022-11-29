import Node from './Node'

class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    add(element){
        var node = new Node(element)
        var current;
        if(this.head == null){
            this.head = element
        }
        else{
            current = this.head
            while(current.next){
                current= current.next
            }
            current = element
        }
        this.size++
    }
}

export default LinkedList;