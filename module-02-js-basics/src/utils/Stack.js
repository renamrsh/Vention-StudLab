class Stack {
    constructor() {
        this.items = [];
    }
    push(el) {
        this.items.push(el);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

export default Stack;