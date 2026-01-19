def solution(brown, yellow):
    answer = []
    i = 1
    
    while True:
        if yellow % i == 0:
            sero = i + 2
            garo = (yellow // i) + 2
            
            if (garo) * (sero) == brown + yellow:
                answer.extend([garo, sero])
                break
        i += 1
        
    return answer