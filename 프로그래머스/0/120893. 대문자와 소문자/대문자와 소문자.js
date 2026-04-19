function solution(my_string) {
    let answer = '';
    
    for (let c of my_string) {
        if (c === c.toLowerCase()) {
            answer += c.toUpperCase();
        } else if (c === c.toUpperCase()) {
            answer += c.toLowerCase();
        }
    }
    
    return answer;
}