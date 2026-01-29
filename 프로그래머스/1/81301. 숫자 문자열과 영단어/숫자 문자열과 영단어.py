def solution(s):
    answer = ''
    temp = ''
    numbers = {'zero' : '0',
              'one' : '1',
              'two' : '2',
              'three' : '3',
              'four' : '4',
              'five' : '5',
              'six' : '6',
              'seven' : '7',
              'eight' : '8',
              'nine' : '9'}
    
    for c in s:
        if c.isdigit():
            answer += c
        else:
            temp += c
            for k in numbers.keys():
                if k in temp:
                    answer += numbers[k]
                    temp = ''
                    break
                    
    return int(answer)