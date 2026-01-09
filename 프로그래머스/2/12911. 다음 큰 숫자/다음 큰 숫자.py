def solution(n):
    answer = n
    n_cnt = 0
    
    for i in bin(n)[2:]:
        if i == '1':
            n_cnt += 1
    
    while True:
        a_cnt = 0
        answer += 1
        for j in bin(answer)[2:]:
            if j == '1':
                a_cnt += 1
        if a_cnt == n_cnt:
            break
    return answer