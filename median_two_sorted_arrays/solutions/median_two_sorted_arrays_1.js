/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {  
    const a = nums1.length < nums2.length ? nums1 : nums2
    const b = nums1.length < nums2.length ? nums2 : nums1

    const x = a.length
    const y = b.length;

    let min = 0, max = x;
    
    while(min <= max) {
        let partitionX = (min + max) / 2 | 0,
            partitionY = (x + y + 1) / 2 - partitionX | 0;
        
        let leftX = partitionX === 0 ? -Infinity : a[partitionX - 1];
        let rightX = partitionX === x ? Infinity : a[partitionX];
        
        let leftY = partitionY === 0 ? -Infinity : b[partitionY - 1];
        let rightY = partitionY === y ? Infinity : b[partitionY];
        
        if(leftX <= rightY && leftY <= rightX) {
            if((x + y) & 1) return Math.max(leftX, leftY);
            return (Math.max(leftX, leftY) + Math.min(rightX, rightY)) / 2;
        } else if(leftX > rightY) {
            max = partitionX - 1;
        } else {
            min = partitionX + 1;
        }
    }
};