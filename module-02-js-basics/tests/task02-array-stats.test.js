import { arrayStats } from "../src/task02-array-stats";

describe("calculates the minimum, maximum, and median values from an array of integers", () => {
    it("return { min: 1, max: 5, median: 3 } when going through provided array", () => {
        expect(arrayStats([3, 1, 2, 5, 4])).toBe("min: 1, max: 5, median: 3");
    });
    it("return { min: 1, max: 7, median: 3 } when going through provided array", () => {
        expect(arrayStats([7, 2, 10])).toBe("min: 2, max: 10, median: 7");
    });
//change not to string but to obj
});
