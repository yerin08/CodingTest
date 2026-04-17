function solution(my_string) {
    const answer = [];
    
    for (let c of my_string) {
        if (answer.includes(c)) continue;
        answer.push(c);
    }
    
    return answer.join('');
}