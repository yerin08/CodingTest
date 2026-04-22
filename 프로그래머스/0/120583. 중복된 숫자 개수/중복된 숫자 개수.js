function solution(array, n) {
    let answer = 0;
    
    array.forEach(item => item === n ? answer++ : answer)
    
    return answer;
}