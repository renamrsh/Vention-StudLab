import { BinaryConverter } from "../src/task08-binary-converter";

describe("", () => {
    it("", () => {
        expect(BinaryConverter.toBinary(10)).toStrictEqual([1, 0, 1, 0]);
    });
    it("", () => {
        expect(BinaryConverter.toDecimal([1,0,1,0])).toStrictEqual(10);
    });
    it("", () => {
        expect(BinaryConverter.convertBase([1,5], 10, 16)).toStrictEqual(["F"]);
    });
    
    it("", () => {
        expect(BinaryConverter.convertBase(["F", 5], 16, 10)).toStrictEqual(245);
    });


    it("", () => {
        expect(BinaryConverter.convertBase([1, 1, 0, 1, 1, 1], 2, 10)).toStrictEqual(55);
    });
    it("", () => {
        expect(BinaryConverter.convertBase([27], 10, 2)).toStrictEqual([1, 1, 0, 1, 1]);
    });
    it("", () => {
        expect(BinaryConverter.convertBase([1, 0, 0, 1, 0, 0, 0, 1, 1], 2, 16)).toStrictEqual([1, 2, 3]);
    });
    it("", () => {
        expect(BinaryConverter.convertBase([2, 4, "F"], 16, 2)).toStrictEqual([0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1]);
    });

    
});