import math

def solution(numer1, denom1, numer2, denom2):
    answer = []
    answer_numer = 0
    answer_denom = 0
    
    if denom1 == denom2:
        answer_numer = numer1 + numer2
        answer_denom = denom1
    else:
        answer_denom = denom1 * denom2
        answer_numer = (numer1 * denom2) + (numer2 * denom1)
    
    g = math.gcd(answer_numer, answer_denom)
    
    answer.append(answer_numer / g)
    answer.append(answer_denom / g)
    
    return answer