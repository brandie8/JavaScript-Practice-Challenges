let singleNumber = function (nums) {
    let arr = nums.sort((a, b) => a - b); 
  
    for (let i = 0; i <= nums.length - 1; i += 2) { 
      if (arr[i] !== arr[i + 1]) {
        return arr[i];
      }
    }
  
    return arr[arr.length - 1]; 
  };
  let result = singleNumber([4, 1, 2, 1, 2]);
console.log(result);