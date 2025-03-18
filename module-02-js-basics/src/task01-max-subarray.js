export const getMaxSubSum = nums => {
    let sum;
    let compareSum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        sum = nums[i];
        if (compareSum < sum) {
            compareSum = sum;
        }
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (compareSum < sum) {
                compareSum = sum;
            }
        }
    }
    if (compareSum > sum) {
        return compareSum;
    } else {
        return sum;
    }
}


export const getMaxSubSumO = nums => {
    const size = nums.length;
    let sum = nums[0];
    let maxSum = sum;
    for (let i = 1; i < size; i++) {
        if (sum + nums[i] < nums[i]) {
            sum = nums[i];
        } else {
            sum += nums[i];
        }
        if (maxSum < sum) {
            maxSum = sum;
        }
    }
    return maxSum;
};

/*
console.log(getMaxSubSumO([-1, 2, 3, -9]));
console.log(getMaxSubSumO([2, -1, 2, 3, -9]));
console.log(getMaxSubSumO([-1, 2, 3, -9, 11]));
*/