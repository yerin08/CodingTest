function solution(my_string) {
    const answer = [];
    
    for (let c of my_string) {
        if (parseInt(c) >= 0) answer.push(parseInt(c));
    }

    answer.sort((a, b) => a - b);
    
    return answer;
}