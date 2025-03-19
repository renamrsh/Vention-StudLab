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
    convertBase(numberArray, fromBase, toBase) {
        let arr = numberArray;
        if (fromBase == toBase || numberArray.length == 0) {
            throw new Error("Invalid input");
        }
        
        const binaryToDecimal = nums => {
            return this.toDecimal(nums);
        }
        
        const octalToDecimal = nums => {
            let arr = nums;
            let size = arr.length - 1;
            let i = size;
            let answer = 0;
            let newNum;
            while (arr && i >= 0) {
                newNum = arr[i];
                answer += Math.pow(8, size - i) * newNum;
                i--;
            }
            return answer;
        }

        const hexadecimalToDecimal = nums => {
            let arr = nums;
            let size = arr.length - 1;
            let i = size;
            let answer = 0;
            let newNum;
            while (arr && i >= 0) {
                newNum = arr[i];
                if (isNaN(newNum)) {
                    newNum = arr[i].charCodeAt(0) - 55;
                }
                answer += Math.pow(16, size - i) * newNum;
                i--;
            }
            return answer;
        }

        const decimalToBinary = nums => {
            return this.toBinary(nums);
        }

        const decimalToOctal = nums => {
            let num;
            if (nums.length > 1) {
                num = nums.reduce((acc, curr) => acc + curr.toString());
            } else {
                num = nums;
            }
            let newNum;
            let arr = [];
            let i = 0;
            while (num) {
                newNum = num % 8;
                arr[i] = newNum;
                num = Math.trunc(num / 8);
                i++;
            }
            return arr.reverse();
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
            while (num) {
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
                    default:
                        throw new Error("Invalid to converter type");
                }
            case 8:
                switch (toBase) {
                    case 2:
                        return decimalToBinary(octalToDecimal(arr));
                    case 10:
                        return octalToDecimal(arr);
                    case 16:
                        return decimalToHexadecimal(octalToDecimal(arr));
                    default:
                        throw new Error("Invalid to converter type");
                }
            case 10:
                switch (toBase) {
                    case 2:
                        return decimalToBinary(arr);
                    case 8:
                        return decimalToOctal(arr);
                    case 16:
                        return decimalToHexadecimal(arr);
                    default:
                        throw new Error("Invalid to converter type");
                }
            case 16:
                switch (toBase) {
                    case 2:
                        let answer = decimalToBinary(hexadecimalToDecimal(arr));
                        let diff = answer.length%4;
                        if (answer.length%4 != 0) {
                            while (diff) {
                                answer.unshift(0);
                                diff--;
                            }
                        }
                        return answer;
                    case 8:
                        return decimalToOctal(hexadecimalToDecimal(arr));
                    case 10:
                        return hexadecimalToDecimal(arr);
                    default:
                        throw new Error("Invalid to converter type");
                }
            default:
                throw new Error("Invalid from converter type");
        }

    }
}