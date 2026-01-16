def solution(s):
    answer = [-1]
    
    for i in range(1, len(s)):
        index = -1
        for j in range(i-1, -1, -1):
            if s[i] == s[j]:
                index = i - j
                break
        answer.append(index)
                  
    return answer