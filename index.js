const { inspect } = require('util');
class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    insert(value) {
        if (value === this.value) {
            return;
        }

        if (value > this.value) {
            if (typeof this.right === 'object') {
                this.right.insert(value);
            } else if (this.right) {
                this.right = new Node(this.right, undefined, value);
            } else {
                this.right = new Node(value);
            }
        } else {
            if (typeof this.left === 'object') {
                this.left.insert(value);
            } else if (this.left) {
                this.left = new Node(this.left, value, undefined);
            } else {
                this.left = new Node(value);
            }
        }
    }

    toString() {
        console.log(inspect(this, { depth: null }));
    }
}

const tree = new Node(7, new Node(5), new Node(10));
tree.insert(1);
tree.insert(6);
tree.insert(17);
tree.insert(12);
tree.insert(8);
tree.insert(9);
tree.toString();
