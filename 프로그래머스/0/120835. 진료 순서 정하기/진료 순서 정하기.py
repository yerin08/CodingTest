def solution(emergency):
    sorted_emer = sorted(emergency, reverse = True)
                
    return [sorted_emer.index(i)+1 for i in emergency]