def solution(k, score):
    answer = []
    honor = []
    
    for i, v in enumerate(score):
        if i < k:
            honor.append(v)
            honor.sort(reverse=True)
        else:
            if v > min(honor):
                honor.pop()
                honor.append(v)
                honor.sort(reverse=True)
        answer.append(min(honor))
        
    return answer