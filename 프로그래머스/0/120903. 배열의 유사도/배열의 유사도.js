function solution(s1, s2) {
    let answer = 0;
    
    s1.forEach(item => {
        if(s2.includes(item)) answer++;
        });
    
    return answer;
}