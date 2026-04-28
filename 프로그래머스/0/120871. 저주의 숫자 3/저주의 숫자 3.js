function solution(n) {
    let answer = 0;
    let count = 1;
    
    while (count <= n) {
        answer++;
        while (answer % 3 === 0 || [...String(answer)].includes("3")) answer++;
        count++;
        console.log(answer);
    }
    
    return answer;
}