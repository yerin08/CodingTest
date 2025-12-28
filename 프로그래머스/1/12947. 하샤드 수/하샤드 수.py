def solution(x):
    answer = True
    n = 0
    numlist = list(str(x))
    
    for i in numlist:
        n += int(i)
    
    if x % n != 0:
        answer = False
        
    return answer