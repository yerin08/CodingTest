def solution(n):
    answer = 1
    
    for i in range(1, int(n / 2)+1):
        sum_n = 0
        sum_n += i
        for j in range(i+1, int(n / 2)+2):
            sum_n += j
            if sum_n == n:
                answer += 1
                break
            elif sum_n > n:
                break
        
    return answer