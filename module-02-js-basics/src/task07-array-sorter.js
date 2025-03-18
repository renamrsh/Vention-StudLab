export const ArraySorter = {
    bubbleSort(array) {
        //Time Complexity - O(n^2) 
        let arr = array;
        let size = arr.length;

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        return arr;
    },
    selectionSort(array) {
        //Time Complexity - O(n^2) 
        let arr = array;
        let size = arr.length;

        for (let i = 0; i < size - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < size; j++) {
                if (arr[minIndex] > arr[j]) {
                    minIndex = j;
                }
            }
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

        return arr;
    },
    insertionSort(array) {
        //Time Complexity - O(n^2) 
        let arr = array;
        let size = arr.length;

        for (let i = 1; i < size; i++) {
            let temp = arr[i];
            let taken = i;
            while (arr[taken - 1] > temp && taken > 0) {
                arr[taken] = arr[taken - 1];
                taken--;
            }
            arr[taken] = temp;
        }
        return arr;
    },
    quickSort(array) {
        //Time Complexity - O(n*log(n))
        let arr = array;
        let size = arr.length;

        const partition = (arr, start, end) => {
            let pivot = arr[end];
            let partitionIndex = start;
            for (let i = start; i < end; i++) {
                if (arr[i] <= pivot) {
                    let temp = arr[i];
                    arr[i] = arr[partitionIndex];
                    arr[partitionIndex] = temp;
                    partitionIndex++;
                }
            }
            let temp = arr[partitionIndex];
            arr[partitionIndex] = arr[end];
            arr[end] = temp;
            return partitionIndex;
        }

        const quickSortRec = (arr, start, end) => {
            if (start < end) {
                let partitionIndex = partition(arr, start, end);
                quickSortRec(arr, start, partitionIndex - 1);
                quickSortRec(arr, partitionIndex + 1, end);
            }
        }

        quickSortRec(arr, 0, size - 1);
        return arr;

    }
}

/*
console.log(ArraySorter.bubbleSort([3, 1, 2]));
console.log(ArraySorter.quickSort([5, 3, 8, 1, 2])); 
*/