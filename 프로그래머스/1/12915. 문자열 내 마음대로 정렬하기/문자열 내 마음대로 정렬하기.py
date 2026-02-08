def solution(strings, n):
    answer = []
    c_list = []
    
    for s in strings:
        c_list.append(s[n])
    c_list.sort()
    
    for c in c_list:
        for word in sorted(strings):
            if c == word[n]:
                answer.append(word)
                strings.remove(word)
                break
                
    return answer