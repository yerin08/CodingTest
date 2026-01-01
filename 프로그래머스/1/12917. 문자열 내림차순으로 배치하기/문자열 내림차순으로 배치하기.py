def solution(s):
    answer = ''
    
    s_list = list(s)
    
    s_list.sort(reverse=True)
    
    for c in s_list:
        answer += c
        
    return answer