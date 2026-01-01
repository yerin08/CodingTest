def solution(arr):
    answer = []
    min_num = min(arr)
    
    arr.remove(min_num)
    
    if arr == []:
        answer.append(-1)
    else:
        return arr
    return answer