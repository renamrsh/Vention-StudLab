import { arrayStats } from "../src/task02-array-stats";

describe("calculates the minimum, maximum, and median values from an array of integers", () => {
    it("", () => {
        expect(() => arrayStats(null)).toThrowError()
    });
    it("", () => {
        expect(arrayStats([3, 1, 2, 5, 4])).toStrictEqual({min: 1, max: 5, median: 3});
    });
    it("", () => {
        expect(arrayStats([7, 2, 10])).toStrictEqual({min: 2, max: 10, median: 7});
    });
    it("", () => {
        expect(arrayStats([7, 2, 4, 10])).toStrictEqual({min: 2, max: 10, median: 5.5});
    });
});
