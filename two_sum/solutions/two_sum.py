# nums = [2, 7, 11, 15]
# target = 9
nums = [2, -2, 11, 15]
target = 9


def twoSum(numbers, targetSum):
    for index in range (0, len(numbers)):
        valAtIndex = numbers[index]
        
        for innerIndex in range(index + 1, len(numbers)):
            innerValAtIndex = numbers[innerIndex]
            if (valAtIndex + innerValAtIndex == targetSum):
                return [index, innerIndex]

    return None


sol = twoSum(nums, target)
print(sol)
