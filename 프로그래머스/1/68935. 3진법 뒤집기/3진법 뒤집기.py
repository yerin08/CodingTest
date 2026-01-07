def solution(n):
    s = ''
    while True:
        s += str(n % 3)
        n //= 3
        if n == 0:
            break
    
    return int(s, 3)