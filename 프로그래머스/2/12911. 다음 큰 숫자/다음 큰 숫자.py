def solution(n):
    answer = n
    n_cnt = bin(n).count('1')

    while True:
        answer += 1
        a_cnt = bin(answer).count('1')
        if a_cnt == n_cnt:
            break
            
    return answer