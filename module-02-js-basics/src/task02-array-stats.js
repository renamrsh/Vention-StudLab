export const arrayStats = nums => {
    if (!Array.isArray(nums) || nums.length == 0) {
        throw new Error("Invalid input");
    }
    const sNums = [...nums].sort(function (a, b) { return a - b; });
    const size = sNums.length;
    let min = sNums[0], max = sNums[size - 1], median;
    if (size % 2 == 1) {
        median = sNums[Math.floor(size / 2)];
    } else {
        median = (sNums[size / 2 - 1] + sNums[size / 2]) / 2;
    }
    return ("min: " + min + ", max: " + max + ", median: " + median);
}