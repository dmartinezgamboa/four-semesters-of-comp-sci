class LinkedList {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }
    push(value) {
        this.length++;
        let newNode = new Node(value);
      if (this.head == null) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }
        this.tail = newNode
    }
    pop() {
      let popped = this.tail.value;
      let newTail = this.head;
      while (newTail.next != null) {
        newTail = newTail.next;
      }
      this.tail = newTail;
      newTail.next = null;
      this.length--;
      return popped;
    }
    _find(value, test=this._test) {

    }
    _test(a,b) {
        return a === b;
    }
    testIndex(search, __, i) {
        return search === i;
    }

    get(index) {

    }
    delete(index) {

    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}