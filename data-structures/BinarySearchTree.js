class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root)
            this.root = {
                value,
                left: null,
                right: null
            }

        const node = this.lookup(value);

        if (node.value > value)
            node.left = {
                value,
                left: null,
                right: null
            }
        else if (node.value < value)
            node.right = {
                value,
                left: null,
                right: null
            }
    }

    lookup(value) {
        if (!this.root)
            return null;

        let node = this.root;

        while (node !== null && node.value !== value)
        {
            if (node.left && value < node.value)
                node = node.left;
            else if (node.right && value > node.value)
                node = node.right;
            else
                break;
        }

        return node;
    }

    remove(value) {
        if (!this.root)
            return;

        const node = this.lookup(value);

        if (node.value === value)
            0;
    }

    traverse() {
        return this._traverse(this.root);
    }

    _traverse(node) {
        const tree = { value: node.value };

        tree.left = node.left === null ? null : this._traverse(node.left);
        tree.right = node.right === null ? null : this._traverse(node.right);

        return tree;
    }
}

const bst = new BST();

bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);

console.log(JSON.stringify(bst.traverse()));
