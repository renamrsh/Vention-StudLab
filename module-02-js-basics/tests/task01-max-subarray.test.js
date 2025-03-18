import { getMaxSubSum, getMaxSubSumO } from "../src/task01-max-subarray";

describe("takes an array of numbers and returns the maximum sum of a contiguous subarray", () => {
    it("return 5 when going through provided array", () => {
        expect(getMaxSubSum([-1, 2, 3, -9])).toBe(5);
    });
    it("return 6 when going through provided array", () => {
        expect(getMaxSubSum([2, -1, 2, 3, -9])).toBe(6);
    });
    it("return 5 when going through provided array", () => {
        expect(getMaxSubSum([-1, 2, 3, -9, 11])).toBe(11);
    });


    it("return 5 when going through provided array", () => {
        expect(getMaxSubSumO([-1, 2, 3, -9])).toBe(5);
    });
    it("return 6 when going through provided array", () => {
        expect(getMaxSubSumO([2, -1, 2, 3, -9])).toBe(6);
    });
    it("return 5 when going through provided array", () => {
        expect(getMaxSubSumO([-1, 2, 3, -9, 11])).toBe(11);
    });
});
