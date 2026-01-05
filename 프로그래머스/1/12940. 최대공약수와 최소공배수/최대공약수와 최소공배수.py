def solution(n, m):
    answer = []
    big, small = max(n, m), min(n, m)
    
    while small > 0:
        big, small = small, big % small
        
    answer.extend([big, (n*m)/big])
        
    return answer