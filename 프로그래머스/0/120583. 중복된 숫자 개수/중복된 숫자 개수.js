function solution(array, n) {
    let answer = 0;
    
    array.forEach(item => {
        if (item === n) answer++;
    });
    
    return answer;
}