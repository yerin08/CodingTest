def solution(s):
    answer_list = []
    
    for word in s.split(' '):
        index = 0
        answer = ''
        for c in word:
            if index == 0:
                answer += c.upper()
            elif c.upper():
                answer += c.lower()
            else:
                answer += c
            index += 1
        answer_list.append(answer)
        
    return ' '.join(answer_list)