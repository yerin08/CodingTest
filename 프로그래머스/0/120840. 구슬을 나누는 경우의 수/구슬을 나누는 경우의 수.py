def solution(balls, share):
    balls_fac = 1
    balls_share_fac = 1
    share_fac = 1
    
    for i in range(balls, 0, -1):
        balls_fac *= i
        
    for j in range(balls-share, 0, -1):
        balls_share_fac *= j
        
    for k in range(share, 0, -1):
        share_fac *= k
        
    return balls_fac / (balls_share_fac * share_fac)