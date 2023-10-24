function twoSum(nums, target) {
  const numObj = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numObj[complement] !== undefined) {
      return [numObj[complement], i];
    }
    numObj[nums[i]] = i;
  }
}
const nums = [1, 4, 6, 10];
const target = 10;
console.log(twoSum(nums, target)); 
