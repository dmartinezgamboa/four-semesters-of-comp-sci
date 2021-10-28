class Tree {
    constructor() {
        this.root = null;
    }
    toObject() {
        return this.root;
    }
    add(value) {
        let newNode = new Node(value);
        if (!this.root) { // if value is root
            this.root = newNode;
            return;
        } else { // if value is not root, iterate
            let tempNode = this.root;
            while (tempNode) {
                if (value > tempNode.value) {
                    if (!tempNode.right) {
                        tempNode.right = newNode; // right assignment
                        return;
                    }
                    tempNode = tempNode.right; // move further into tree    
                }
                if (value <= tempNode.value) {
                    if (!tempNode.left) {
                        tempNode.left = newNode; //  left assignment
                        return;
                    }
                    tempNode = tempNode.left; // move further into tree
                }
            }
        } 
    }
}

class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}