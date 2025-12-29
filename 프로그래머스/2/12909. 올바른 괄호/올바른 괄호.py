def solution(s):
    pt_stack =[]
    
    for c in s:
        if c == "(":
            pt_stack.append(c)
        else:
            if not pt_stack:
                return False
            pt_stack.pop()

            
    return len(pt_stack) == 0