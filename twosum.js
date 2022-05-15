/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const oldvalues ={}
    for (let i = 0; i < nums.length; i++) {
        const CV = nums[i]
        const NV = target - CV
        const index2 = oldvalues[NV]
        if (index2 != null) {
            return [index2, i]
        } else {
            oldvalues[CV] = i
        }
    }
};
