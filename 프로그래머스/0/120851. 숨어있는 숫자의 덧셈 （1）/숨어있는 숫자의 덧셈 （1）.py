def solution(my_string):
    answer = 0
    digits = [char for char in my_string if char.isdigit()]
    
    for i in digits:
        answer += int(i)
    return answer