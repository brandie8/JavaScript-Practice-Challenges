let majorityElement = function(nums) {
    const n = nums.length;
    const majority = Math.floor(n / 2);
    let buckets = {};
  
    // quick checks
    if (n <= 2) { return nums[0]; }
  
    for (let i = 0; i < n; i++) {
      buckets[nums[i]] = buckets[nums[i]] || 0;
      buckets[nums[i]]++;
      if (buckets[nums[i]] > majority) {
        return nums[i];
      }
    }
  };
  
  // Example usage
  let nums = [2, 2, 1, 1, 1, 2, 2];
  let majority = majorityElement(nums);
  console.log(majority); // The majority element will be displayed in the console
  