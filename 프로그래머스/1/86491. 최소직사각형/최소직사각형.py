def solution(sizes):
    garo, sero = [], []
    
    for arr in sizes:
        arr.sort()
    for i in range(len(sizes)):
        garo.append(sizes[i][0])
        sero.append(sizes[i][1])
        
    return max(garo) * max(sero)