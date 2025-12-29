def solution(seoul):
    answer = ''
    x = 0
    
    for name in seoul:
        if name == "Kim":
            answer = '김서방은 ' + str(x) +'에 있다'
        x += 1
        
    return answer