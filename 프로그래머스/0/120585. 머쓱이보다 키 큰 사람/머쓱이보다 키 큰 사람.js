function solution(array, height) {
    let answer = 0;
    
    array.forEach(item => {
        if (item > height) answer++;
    });
    
    return answer;
}