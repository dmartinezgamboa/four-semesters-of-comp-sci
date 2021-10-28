/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class ArrayList {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(value) {
        this.data[this.length] = value;
        this.length++;
    }

    pop() {
        const popped = this.data[this.length -1];
        delete this.data[this.length - 1];
        this.length--;
        return popped;
    }

    get(index) {
        return this.data[index];
    }

    delete(index) {
        const deleted = this.data[index];
        delete this.data[index];
        this._collapseTo(index);
        return deleted;
    }

    _collapseTo(index){
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

var myList = new ArrayList();

myList.push(1);
myList.push(2);
myList.push(3);
myList.push(4);
// console.log(myList.get(10))
myList.push(5);
myList.push(6);
console.log(myList);

myList.delete(1);

console.log(myList);