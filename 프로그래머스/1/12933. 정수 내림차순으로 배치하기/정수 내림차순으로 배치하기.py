def solution(n):
    answer = ''
    numlist = []
    
    for c in str(n):
        numlist.append(c)
        
    numlist.sort(reverse=True)
    
    for n in numlist:
        answer += n

    return int(answer)