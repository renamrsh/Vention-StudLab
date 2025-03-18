import { ArraySorter } from "../src/task07-array-sorter";

describe("", () => {
    it("", () => {
        expect(ArraySorter.bubbleSort([3,1,2])).toStrictEqual([1,2,3]);
    });
    it("", () => {
        expect(ArraySorter.selectionSort([3,1,2])).toStrictEqual([1,2,3]);
    });
    it("", () => {
        expect(ArraySorter.insertionSort([3,1,2])).toStrictEqual([1,2,3]);
    });
    it("", () => {
        expect(ArraySorter.quickSort([3,1,2])).toStrictEqual([1,2,3]);
    });

    
    it("", () => {
        expect(ArraySorter.bubbleSort([5,3,8,1,2])).toStrictEqual([1,2,3,5,8]);
    });
    it("", () => {
        expect(ArraySorter.selectionSort([5,3,8,1,2])).toStrictEqual([1,2,3,5,8]);
    });
    it("", () => {
        expect(ArraySorter.insertionSort([5,3,8,1,2])).toStrictEqual([1,2,3,5,8]);
    });
    it("", () => {
        expect(ArraySorter.quickSort([5,3,8,1,2])).toStrictEqual([1,2,3,5,8]);
    });
});

