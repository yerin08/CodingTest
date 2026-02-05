def solution(k, score):
    answer = []
    honor = []
    
    for i, v in enumerate(score):
        if i < k:
            honor.append(v)
        else:
            if v > min(honor):
                honor.remove(min(honor))
                honor.append(v)
        answer.append(min(honor))
        
    return answer