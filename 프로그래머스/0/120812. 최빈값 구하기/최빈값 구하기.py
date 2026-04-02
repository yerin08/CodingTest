def solution(array):
    answer = 0
    freq = {}
    
    for num in array:
        freq[num] = freq.get(num, 0) + 1
    
    max_count = max(freq.values())
    
    freq_arr = [k for k, v in freq.items() if v == max_count]
    
    if len(freq_arr) != 1:
        answer = -1
    else:
        answer = freq_arr[0]
        
    return answer