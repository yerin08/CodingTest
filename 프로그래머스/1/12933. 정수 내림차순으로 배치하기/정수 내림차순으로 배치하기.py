def solution(n):
    answer = ''
    numlist = list(str(n))
        
    numlist.sort(reverse=True)
    
    for n in numlist:
        answer += n

    return int(answer)