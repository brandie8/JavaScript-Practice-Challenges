function containsTwo(nums) {
    const numSet = new Set();
    for (let num of nums) {
        if (numSet.has(num)) {
            return true;
        }
        numSet.add(num);
    }
    return false;
}

const nums1= [1, 2, 3, 1];
const nums2 = [1, 2, 3, 4];
console.log(containsTwo(nums1)); 
console.log(containsTwo(nums2)); 
