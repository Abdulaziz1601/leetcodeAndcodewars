
const missingNo = (nums) => 5050 - nums.sort((a, b) => a-b).reduce((x, y) => x+y);