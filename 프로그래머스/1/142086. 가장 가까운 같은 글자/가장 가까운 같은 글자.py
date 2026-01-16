def solution(s):
    answer = [-1]
    
    for i in range(1, len(s)):
        location = []
        for j in range(i):
            if s[i] == s[j]:
                location.append(i-j)
        if location:
            answer.append(min(location))
        else:
            answer.append(-1)
                  
    return answer