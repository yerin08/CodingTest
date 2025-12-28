def solution(s):
    answer = ''
    s_list = s.split(' ')
    n_list = []
    
    for c in s_list:
        n_list.append(int(c))
        
    answer += str(min(n_list)) + ' ' + str(max(n_list))
    
    return answer