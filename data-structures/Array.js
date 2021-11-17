class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        ++this.length;

        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        --this.length;

        return lastItem;
    }

    delete(index) {
        const item = this.data[index];

        for (; index < this.length - 1; ++index)
            this.data[index] = this.data[index + 1];

        delete this.data[this.length - 1];
        --this.length;

        return item;
    }

}

const array = new Array();
array.push(9);
console.log(array.get(0));
array.push(12);
array.delete(0);
console.log(array);