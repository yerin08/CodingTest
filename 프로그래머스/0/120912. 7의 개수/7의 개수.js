function solution(array) {
    let answer = 0;
    
    [...array.join('')].forEach(n => {
        if (n === "7") answer++;
    });
    
    return answer;
}