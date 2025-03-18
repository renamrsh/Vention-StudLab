export const BinaryConverter = {
    toBinary(number) {
        let num = number;
        let arr = []
        arr[0] = 1;
        
        for (let i = 1; arr[i - 1] * 2 <= num; i++) {
            arr[i] = arr[i - 1] * 2;
        }
        for (let j = arr.length - 1; j >= 0; j--) {
            if (num - arr[j] >= 0) {
                num -= arr[j];
                arr[j] = 1;
            } else {
                arr[j] = 0;
            }
        }
        return arr.reverse();
    },
    toDecimal(binaryArray) {
        let arr = binaryArray;
        let size = arr.length;
        let j = 0;
        let answer = 0;
        for (let i = size - 1; i >= 0; i--) {
            answer += arr[j] * Math.pow(2, i);
            j++;
        }
        return answer;
    },
    //let num = Number.parseInt(arr.reduce((acc, curr)=> acc+=curr.toString()));
    convertBase(numberArray, fromBase, toBase) {
        let arr = numberArray;
        if (fromBase == toBase) {
            return;
        }

        const binaryToDecimal = nums => {
            return this.toDecimal(nums);
        }
        const octalToDecimal = nums => {

        }
        const hexadecimalToDecimal = nums => {
            let arr = nums;
            let size = arr.length-1;
            let i = size;
            let answer = 0;
            let newNum;
            while(arr && i>=0){
                newNum = arr[i];
                if(isNaN(newNum)){
                    newNum = arr[i].charCodeAt(0)-55;
                }
                answer += Math.pow(16,size-i) * newNum;
                i--;
            }
            return answer;
        }
        const decimalToBinary = nums => {
            return this.toBinary(nums);
        }
        const decimalToOctal = nums => {

        }
        const decimalToHexadecimal = nums => {
            let num;
            if (nums.length > 1) {
                num = nums.reduce((acc, curr) => acc + curr.toString());
            } else {
                num = nums;
            }
            let newNum;
            let arr = [];
            let i = 0;
            while (num && i < 15) {
                newNum = num % 16;
                if (newNum <= 9) {
                    arr[i] = newNum;
                } else {
                    arr[i] = String.fromCharCode(newNum + 55);
                }
                num = Math.trunc(num / 16);
                i++;
            }
            return arr.reverse();
        }

        switch (fromBase) {
            case 2:
                switch (toBase) {
                    case 10:
                        return binaryToDecimal(arr);
                    case 8:
                        return decimalToOctal(binaryToDecimal(arr));
                    case 16:
                        return decimalToHexadecimal(binaryToDecimal(arr));
                }
                break;
            case 10:
                switch (toBase) {
                    case 2:
                        return decimalToBinary(arr);
                    case 8:
                        return decimalToOctal(arr);
                    case 16:
                        return decimalToHexadecimal(arr);
                }
                break;
            case 8:
                switch (toBase) {
                    case 2:
                        return decimalToBinary(octalToDecimal(arr));
                    case 10:
                        return octalToDecimal(arr);
                    case 16:
                        return decimalToHexadecimal(octalToDecimal(arr));
                }
                break;
            case 16:
                switch (toBase) {
                    case 2:
                        let hexToDec = hexadecimalToDecimal(arr);
                        let diff = toString(hexToDec).length*4%10;
                        let answer = decimalToBinary(hexToDec);
                        if(diff!=0){
                            while(diff){
                                answer.unshift(0);
                                diff--;
                            }
                        }
                        return answer;
                    case 8:
                        return decimalToOctal(hexadecimalToDecimal(arr));
                    case 10:
                        return hexadecimalToDecimal(arr);
                }
                break;
        }
    }
}

/*
console.log(BinaryConverter.toBinary(10));
console.log(BinaryConverter.toDecimal([1, 0, 1, 0]));
console.log(BinaryConverter.convertBase([1, 5], 10, 16)); // → [ "F" ] 
console.log(BinaryConverter.convertBase(["F", 5], 16, 10)); // → 245 
console.log(BinaryConverter.convertBase([1, 1, 0, 1, 1, 1], 2, 10)); // → 55
console.log(BinaryConverter.convertBase([27], 10, 2)); // →  [1, 1, 0, 1, 1]
console.log(BinaryConverter.convertBase([1, 0, 0, 1, 0, 0, 0, 1, 1], 2, 16)); // → [1, 2, 3]
console.log(BinaryConverter.convertBase([2, 4, "F"], 16, 2)); // →  [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1]
*/

console.log(BinaryConverter.convertBase([], 8, 10)); // → 
console.log(BinaryConverter.convertBase([], 8, 2)); // →  
console.log(BinaryConverter.convertBase([], 8, 16)); // →  


console.log(BinaryConverter.convertBase([], 10, 8)); // →  
console.log(BinaryConverter.convertBase([], 2, 8)); // →  
console.log(BinaryConverter.convertBase([], 16, 8)); // →  

