def solution(s):
    cnt, zero = 0, 0
    
    while s != '1':
        l = 0
        for n in s:
            if n == '1':
                l += 1
            else:
                zero += 1
        s = str(bin(l)[2:])
        cnt += 1
            
    return [cnt, zero]