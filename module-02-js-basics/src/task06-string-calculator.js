import Stack from "./utils/Stack.js";

export const StringCalculator = {
    precedence(operator) {
        if (operator === "-" || operator === "+") {
            return 1;
        }
        if (operator === "*" || operator === "/") {
            return 2;
        }
        return 0;
    },

    calculate(expression) {
        if (!isNaN(expression)) {
            return;
        }

        //array with initial data
        let expArray = (expression.replace(/\s+/g, "")).match(/(\d+\.\d+|\d+|[()+\-*/])/g);
        //console.log(expArray)

        //stack that will handle operators
        const opStack = new Stack();

        //array with a ready postfix order
        let postFixArray = [];
        for (let i = 0; i < expArray.length; i++) {
            if ((!isNaN(expArray[i]))) {
                postFixArray.push(expArray[i]);
            } else if (expArray[i] == "*" || expArray[i] == "/" || expArray[i] == "+" || expArray[i] == "-") {
                while (!opStack.isEmpty() && opStack.peek() != "(" && StringCalculator.precedence(opStack.peek()) >= StringCalculator.precedence(expArray[i])) {
                    postFixArray.push(opStack.pop());
                }
                opStack.push(expArray[i]);
            } else if (expArray[i] == "(") {
                opStack.push(expArray[i]);
            } else if (expArray[i] == ")") {
                while (!opStack.isEmpty() && opStack.peek() != "(") {
                    postFixArray.push(opStack.pop());
                }
                opStack.pop();
            }
        }
        while (!opStack.isEmpty()) {
            postFixArray.push(opStack.pop());
        }
        //console.log(postFixArray)

        //stack that will handle calculating of numbers getted from a ready post fix array
        const calcStack = new Stack();

        for (let j = 0; j < postFixArray.length; j++) {
            if (postFixArray[j] == '+' || postFixArray[j] == '-' || postFixArray[j] == '*' || postFixArray[j] == '/') {
                let secondNum = Number.parseFloat(calcStack.pop());
                let firstNum = Number.parseFloat(calcStack.pop());
                switch (postFixArray[j]) {
                    case '+':
                        calcStack.push(firstNum + secondNum);
                        break;
                    case '-':
                        calcStack.push(firstNum - secondNum);
                        break;
                    case '*':
                        calcStack.push(firstNum * secondNum);
                        break;
                    case '/':
                        calcStack.push(firstNum / secondNum);
                        break;
                }
            } else {
                calcStack.push(postFixArray[j]);
            }
        }
        return (calcStack.peek()).toString();
    }
}

/*
console.log(StringCalculator.calculate("2 + 3"));
console.log(StringCalculator.calculate("2.5 * 4"));
console.log(StringCalculator.calculate("10 / 4"));
console.log(StringCalculator.calculate("(2 + 3) * 4"));
console.log(StringCalculator.calculate("2 + 3 * 4"));
*/