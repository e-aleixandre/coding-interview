class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    peek() {
        if (!this.isEmpty())
            return this.front;
    }

    enqueue(item) {
        if (this.isEmpty())
        {
            this.back = this.front = {
                value: item,
                next: null
            }
        } else {
            this.back.next = {
                value: item,
                next: null
            }

            this.back = this.back.next;
        }

        ++this.length;
    }

    dequeue() {
        if (this.isEmpty())
            return;

        const front = this.front;

        this.front = this.front.next;

        --this.length;

        return front;
    }

    isEmpty() {
        return this.length === 0;
    }

}
