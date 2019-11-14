/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const compliments = {}
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i]
        const compliment = target - curr
        if (compliments[compliment] !== undefined) {
            return [compliments[compliment], i]
        } else {
            compliments[curr] = i
        }
    }
    return []
};