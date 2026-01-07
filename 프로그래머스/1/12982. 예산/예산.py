def solution(d, budget):
    answer = 0
    
    d.sort()
    
    for n in d:
        budget -= n
        if budget < 0:
            break
        answer += 1
        
    return answer