def solution(food):
    answer = []
    
    for i in range(1, len(food)):
        for j in range(food[i] // 2):
            answer.append(str(i))
    
    reversed_ans = answer[::-1]
    
    return ''.join(answer) + '0' + ''.join(reversed_ans)