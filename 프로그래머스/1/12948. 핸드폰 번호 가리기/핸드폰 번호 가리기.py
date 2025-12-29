def solution(phone_number):
    answer = ''
    pn_list = list(phone_number)
    
    for i in range(len(pn_list)-4):
        pn_list[i] = '*'
    
    for n in pn_list:
        answer += n
        
    return answer