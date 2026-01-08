def solution(n):
    answer = 0
    
    for i in range(1, n+1):
        sum_n = 0
        while sum_n < n:
            sum_n += i
            i += 1
        if sum_n == n:
            answer += 1
        
    return answer