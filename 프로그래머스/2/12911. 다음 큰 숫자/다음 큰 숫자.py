def solution(n):
    cnt_1 = bin(n).count('1')

    while True:
        n += 1
        cnt_2 = bin(n).count('1')
        if cnt_1 == cnt_2:
            break
            
    return n