# exampleInput = [0,1,0,2,1,0,1,3,2,1,2,1]
# exampleInput = [3, 0, 0, 2, 0, 4]
exampleInput = [0,1,0,3,1,0,1,3,2,1,2,1]

def trappingRainWater(elevationList):
    caughtWater = 0
    
    # map of amount of steps traversed by each elevation
    elevationStepMap = {}

    for currentElevation in elevationList:
        # print(elevationStepMap) // use for debugging the state

        # compare every elevation in the map to the current height
        for (potentialElevation, steps) in elevationStepMap.items(): 
            if (currentElevation >= potentialElevation):
                # add the number of steps taken to caught rainwater
                caughtWater += steps
            else :
                # increase the number of steps for the potential elevation 
                elevationStepMap[potentialElevation] += 1
        
        # reset the step count for every elevation below the current one
        for lowerElevation in range(1, currentElevation + 1):
            elevationStepMap[lowerElevation] = 0
            
    return caughtWater

sol = trappingRainWater(exampleInput)
print(sol)

# this solution is not great since its time complexity is constrained by input values
# rather than input size.