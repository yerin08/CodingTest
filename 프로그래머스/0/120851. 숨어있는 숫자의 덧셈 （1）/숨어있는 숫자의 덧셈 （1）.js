function solution(my_string) {
    let answer = 0;
    
    for (let c of my_string) {
        if (!isNaN(c)) answer += parseInt(c);
    }
    
    return answer;
}