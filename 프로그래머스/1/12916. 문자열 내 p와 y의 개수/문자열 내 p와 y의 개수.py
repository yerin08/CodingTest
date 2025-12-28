def solution(s):
    answer = True
    p_cnt = 0
    y_cnt = 0
    
    s_list = list(s.lower())
    
    for c in s_list:
        if c == 'p':
            p_cnt += 1
        elif c == 'y':
            y_cnt += 1
    
    if p_cnt != y_cnt:
        answer = False
        
    return answer