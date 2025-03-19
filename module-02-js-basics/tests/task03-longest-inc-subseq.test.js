import { longestIncSubseq } from "../src/task03-longest-inc-subseq";

describe("find and return the longest increasing subsequence from the provided integer array", () => {
    it("", () => {
        expect(longestIncSubseq([1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1])).toStrictEqual([1, 2, 5, 7, 8, 90]);
    });
    it("", () => {
        expect(longestIncSubseq([5, 4, 3, 2, 1])).toBeOneOf([[5], [4], [3], [2], [1]]);
    });
    it("", () => {
        expect(longestIncSubseq([2, 5, 3, 4, 2, 3, 1, 2, 0, 1])).toBeOneOf([[2, 5], [3, 4], [2, 3], [1, 2], [0, 1]]);
    });
});
