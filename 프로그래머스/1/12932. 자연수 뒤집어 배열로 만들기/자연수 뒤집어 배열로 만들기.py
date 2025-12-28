def solution(n):
    answer = []
    numlist = list(str(n))
    
    numlist.reverse()
    
    for n in numlist:
        answer.append(int(n))
        
    return answer