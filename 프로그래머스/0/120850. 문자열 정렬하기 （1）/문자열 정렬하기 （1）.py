def solution(my_string):
    digit = [char for char in my_string if char.isdigit()]
    
    answer = list(map(int, digit))
    answer.sort()
    return answer