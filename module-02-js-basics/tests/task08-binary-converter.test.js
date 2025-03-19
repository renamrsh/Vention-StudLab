import { BinaryConverter } from "../src/task08-binary-converter";

describe("converting numbers between binary, decimal, and other bases", () => {
    it("return invalid when input data is not right", () => {
        expect(() => BinaryConverter.convertBase([1, 0, 1, 0], 2, 2)).toThrowError();
        expect(() => BinaryConverter.convertBase([1, 0, 1, 0], 2, 99)).toThrowError();
        expect(() => BinaryConverter.convertBase([1, 0, 1, 0], 8, 99)).toThrowError();
        expect(() => BinaryConverter.convertBase([1, 0, 1, 0], 10, 99)).toThrowError();
        expect(() => BinaryConverter.convertBase([1, 0, 1, 0], 16, 99)).toThrowError();
        expect(() => BinaryConverter.convertBase(99, 99)).toThrowError();

    });
    
    it("", () => {
        expect(BinaryConverter.toBinary(10)).toStrictEqual([1, 0, 1, 0]);
    });
    it("", () => {
        expect(BinaryConverter.toDecimal([1, 0, 1, 0])).toStrictEqual(10);
    });


    it("", () => {
        expect(BinaryConverter.convertBase([0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1], 2, 8)).toStrictEqual([1, 1, 1, 7]);
    });
    it("", () => {
        expect(BinaryConverter.convertBase([1, 1, 0, 1, 1, 1], 2, 10)).toStrictEqual(55);
    });
    it("", () => {
        expect(BinaryConverter.convertBase([1, 0, 0, 1, 0, 0, 0, 1, 1], 2, 16)).toStrictEqual([1, 2, 3]);
    });


    it("", () => {
        expect(BinaryConverter.convertBase([3, 3], 8, 2)).toStrictEqual([1, 1, 0, 1, 1]);
    });
    it("", () => {
        expect(BinaryConverter.convertBase([1, 1, 1, 7], 8, 2)).toStrictEqual([1, 0, 0, 1, 0, 0, 1, 1, 1, 1]);
    });
    it("", () => {
        expect(BinaryConverter.convertBase([2, 4, 5], 8, 10)).toStrictEqual(165);
    });
    it("", () => {
        expect(BinaryConverter.convertBase([1, 2, 5, 5], 8, 16)).toStrictEqual([2, "A", "D"]);
    });


    it("", () => {
        expect(BinaryConverter.convertBase([27], 10, 2)).toStrictEqual([1, 1, 0, 1, 1]);
    });
    it("", () => {
        expect(BinaryConverter.convertBase([1, 5, 8], 10, 8)).toStrictEqual([2, 3, 6]);
    });
    it("", () => {
        expect(BinaryConverter.convertBase([1, 5], 10, 16)).toStrictEqual(["F"]);
    });


    it("", () => {
        expect(BinaryConverter.convertBase([2, 4, "F"], 16, 2)).toStrictEqual([0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1]);
    });
    it("", () => {
        expect(BinaryConverter.convertBase(["E", 2, 5], 16, 2)).toStrictEqual([1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1]);
    });
    it("", () => {
        expect(BinaryConverter.convertBase(["F", 5], 16, 8)).toStrictEqual([3, 6, 5]);
    });
    it("", () => {
        expect(BinaryConverter.convertBase(["F", 5], 16, 10)).toStrictEqual(245);
    });
});