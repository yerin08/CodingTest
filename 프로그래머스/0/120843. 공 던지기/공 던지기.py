def solution(numbers, k):
    count = (k-1) * 2
    
    answer = numbers[count%len(numbers)]
    
    return answer