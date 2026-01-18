def solution(s, n):
    answer = ''
    
    for c in s:
        if c == ' ':
            answer += " "
        elif c.isupper():
            if ord(c) - ord("A") + n >= 26:
                asc = ord(c) - ord("A") + n - 26
                answer += chr(ord("A") + asc)
            else:
                answer += chr(ord(c) + n)
        elif c.islower():
            if ord(c) - ord("a") + n >= 26:
                asc = ord(c) - ord("a") + n - 26
                answer += chr(ord("a") + asc)
            else:
                answer += chr(ord(c) + n)
            
    return answer