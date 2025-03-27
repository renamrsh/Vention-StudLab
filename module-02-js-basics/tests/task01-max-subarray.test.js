import { getMaxSubSum, getMaxSubSumO } from "../src/task01-max-subarray";

describe("takes an array of numbers and returns the maximum sum of a contiguous subarray", () => {
    it("", () => {
        expect(getMaxSubSum([-1, 2, 3, -9])).toBe(5);
    });
    it("", () => {
        expect(getMaxSubSum([2, -1, 2, 3, -9])).toBe(6);
    });
    it("", () => {
        expect(getMaxSubSum([-1, 2, 3, -9, 11])).toBe(11);
    });


    it("", () => {
        expect(getMaxSubSumO([-1, 2, 3, -9])).toBe(5);
    });
    it("", () => {
        expect(getMaxSubSumO([2, -1, 2, 3, -9])).toBe(6);
    });
    it("", () => {
        expect(getMaxSubSumO([-1, 2, 3, -9, 11])).toBe(11);
    });
});
