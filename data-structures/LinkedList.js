class LinkedList {
    constructor() {
    }

    append(element) {
        // If there's no tail, then the list is empty...
        if (!this.tail)
        {
            this.head = {
                value: element,
                next: null
            }

            this.tail = this.head;

            return element;
        }

        this.tail.next = {
            value: element,
            next: null
        }

        this.tail = this.tail.next;

        return element;
    }

    prepend(element) {

        if (!this.head)
        {
            this.head = {
                value: element,
                next: null
            }
            this.tail = this.head;

            return element;
        }

        this.head = {
            value: element,
            next: this.head
        };

        return element;
    }

    insert(index, element) {

        if (index === 0)
            return this.prepend(element);

        let node = this.head;

        while (index !== 0 && node.next !== null) {
            --index;
            node = node.next;
        }

        // The index is out of bounds
        if (index !== 0)
            return;

        const newNode = {
            value: node.value,
            next: node.next
        }

        node.value = element;
        node.next = newNode;

        // Was it the tail?
        if (newNode.next === null)
            this.tail = newNode;

        return element;
    };

    remove(index) {
        if (index === 0)
        {
            // If there's only one element, remove head and tail
            if (this.head === this.tail)
            {
                let value = this.head.value;
                this.head = undefined;
                this.tail = undefined;

                return value;
            }
            else if (this.head.next) // If there's more than one element...
            {
                let value = this.head.value;
                this.head = this.head.next;

                return value;
            }
        }

        let previous = this.head;
        let node = previous.next;
        let i = 1;

        while (i < index && node.next !== null)
        {
            ++i;
            previous = node;
            node = node.next;
        }

        if (i === index) {
            previous.next = node.next;
            if (node === this.tail)
                this.tail = previous;

            return node.value;
        }

        return undefined;
    }

    reverse() {
        if (!this.head || this.head === this.tail)
            return;

        // Save first and second element to traverse
        let first = this.head;
        let second = this.head.next;

        // Swap head and tail
        this.head = this.tail;
        this.tail = first;
        this.tail.next = null;

        // Get elements by pairs and reorder them
        while (second) {
            let third = second.next;
            second.next = first;
            first = second;
            second = third;
        }
    }

    print() {
        let node = this.head;

        while (node)
        {
            console.log(node.value);
            node = node.next;
        }
    }
}

module.exports = LinkedList;
