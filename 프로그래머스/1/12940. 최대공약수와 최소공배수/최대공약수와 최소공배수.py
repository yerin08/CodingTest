def solution(n, m):
    big, small = max(n, m), min(n, m)
    
    while small > 0:
        big, small = small, big % small
        
    gcd = big
    lcm = (n * m) / gcd    
        
    return [gcd, lcm]