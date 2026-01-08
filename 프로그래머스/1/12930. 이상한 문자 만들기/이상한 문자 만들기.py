def solution(s):
    n_list = []
    
    for n in s.split(' '):
        answer = ''
        index = 0
        for c in n:
            if index % 2 == 0:
                answer += c.upper()
            else:
                answer += c.lower()
            index += 1
        n_list.append(answer)
        
    return ' '.join(n_list)