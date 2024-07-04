function twoSum(sortedNums, target) {
  let left = 0;
  let right = sortedNums.length - 1;

  while (left < right) {
    const sum = sortedNums[left] + sortedNums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // Return an empty array if no pair is found
  return [];
}

// Example usage:
const sortedNums = [1, 2, 3, 4, 6];
const target = 6;
console.log(twoSum(sortedNums, target));  // Output: [1, 3]
