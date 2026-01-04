def solution(s):
    answer_list = []
    
    for word in s.split(' '):
        answer = ''
        for c in word:
            if answer == '':
                answer += c.upper()
            elif c.upper():
                answer += c.lower()
            else:
                answer += c
        answer_list.append(answer)
        
    return ' '.join(answer_list)