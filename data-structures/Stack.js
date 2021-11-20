class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        if (!this.isEmpty())
            return this.top.value;
    }

    push(item) {
        if (this.isEmpty())
        {
            this.top = {
                value: item,
                next: null
            }

            this.bottom = this.top;
        } else {
            this.top = {
                value: item,
                next: this.top
            };
        }

        ++this.length;

    }

    pop() {
        if (this.isEmpty())
            return;

        const top = this.top;

        this.top = this.top.next;

        --this.length;

        return top;
    }

    isEmpty() {
        return this.length === 0;
    }
}

class ArrayBasedStack {
    constructor() {
        this.data = [];
    }

    peek() {
        if (this.isEmpty())
            return;

        return this.data[this.data.length - 1];
    }

    push(item) {
        this.data.push(item);
    }

    pop() {
        if (this.isEmpty())
            return;

        return this.data.pop();
    }

    isEmpty() {
        return this.data.length === 0;
    }
}
