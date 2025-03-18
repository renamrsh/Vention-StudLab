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


/*
BinaryConverter.convertBase([1,5], 10, 16); // → [ "F" ]
BinaryConverter.convertBase([15], 10, 16); // → [ "F" ] <- changed

arrayStats([7, 2, 10]);  // → { min: 1, max: 7, median: 3 }
arrayStats([7, 2, 10]);  // → { min: 2, max: 10, median: 7 } <- changed
*/