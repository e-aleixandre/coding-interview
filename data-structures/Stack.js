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

let stack = new Stack();

stack.push(3);
console.log(stack);
stack.push(5);
console.log(stack);
console.log(stack.peek());
stack.pop();
stack.push(2);
console.log(stack);
