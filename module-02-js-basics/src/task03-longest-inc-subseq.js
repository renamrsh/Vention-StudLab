export const longestIncSubseq = nums => {
    const size = nums.length;
    let sum = 1, maxSum = sum, index = 0, maxIndex = index;
    for (let i = 1; i < size; i++) {
        if (nums[i - 1] < nums[i]) {
            sum++;
            if (maxSum < sum) {
                maxSum = sum;
                maxIndex = index;
            }
        } else {
            sum = 1;
            index = i;
        }
    }
    return nums.slice(maxIndex, maxIndex + maxSum);
}