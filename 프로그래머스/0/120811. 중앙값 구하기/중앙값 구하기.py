def solution(array):
    answer = 0
    index = len(array) // 2
    
    array.sort()
                
    answer = array[index]
    
    return answer