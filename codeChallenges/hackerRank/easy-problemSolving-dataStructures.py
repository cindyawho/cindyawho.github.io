# 04/28/24
# 'simpleArraySum' function
# The function is expected to return an INTEGER.
#       return the sum of the array elements as an integer.
# The function accepts INTEGER_ARRAY ar as parameter.

def simpleArraySum(ar):
    sum = 0
    for i in range(len(ar)):
        sum += ar[i]
    return sum

# 04/28/24
# 'compareTriplets' function: 
# https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER_ARRAY a
#  2. INTEGER_ARRAY b

def compareTriplets(a, b):
    # Write your code here
    aScore = 0
    bScore = 0
    results = []
    for i in range(len(a)):
        if a[i] < b[i]:
            bScore += 1
        elif a[i] > b[i]:
            aScore += 1
    results.append(aScore)
    results.append(bScore)
    return results

# 04/28/24
# 'aVeryBigSum' function
# https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true
# The function is expected to return a LONG_INTEGER.
# The function accepts LONG_INTEGER_ARRAY ar as parameter.

def aVeryBigSum(ar):
    # Write your code here
    result = 0
    for i in range(len(ar)):
        result += ar[i]
    return result

# 04/30/24
# 'diagonalDifference' function below.
# https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.

def diagonalDifference(arr):
    # Write your code here
    sumLR = 0
    sumRL = 0
    size = len(arr)
    i = 0
    
    for i in range(size):
        sumLR += arr[i][i]
        sumRL += arr[size-1-i][i]
    
    diff = abs(sumLR - sumRL)
    return diff

# 04/30/24
# 'plusMinus' function below.
# https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
# The function accepts INTEGER_ARRAY arr as parameter.

def plusMinus(arr):
    # Write your code here
    positiveCount = 0
    negativeCount = 0
    zeroCount = 0
    
    for i in range(len(arr)):
        if arr[i] < 0:
            negativeCount += 1
        elif arr[i] > 0:
            positiveCount += 1
        else:
            zeroCount += 1
    
    positiveRatio = format((positiveCount/len(arr)), '.6f')
    negativeRatio = format((negativeCount/len(arr)), '.6f')
    zeroRatio = format((zeroCount/len(arr)), '.6f')
    
    print(positiveRatio)
    print(negativeRatio)
    print(zeroRatio)

# 05/03/24
# 'staircase' function below.
# https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
# The function accepts INTEGER n as parameter.

def staircase(n):
    for i in range(1, n+1):
        line = ""
        for j in range(n - i):
            line += " "
        for k in range(i):
            line += "#"    
        print(line)

# 05/03/24
# 'miniMaxSum' function below.
# https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
# The function accepts INTEGER_ARRAY arr as parameter.

def miniMaxSum(arr):
    smallestNumber = arr[0]
    largestNumber = arr[0]
    totalSum = arr[0]
    for i in range(1, len(arr)):
        totalSum += arr[i]
        if arr[i] < smallestNumber:
            smallestNumber = arr[i]
        elif arr[i] > largestNumber:
            largestNumber = arr[i]
    miniSum = totalSum - largestNumber
    maxSum = totalSum - smallestNumber
    print(miniSum, maxSum)

