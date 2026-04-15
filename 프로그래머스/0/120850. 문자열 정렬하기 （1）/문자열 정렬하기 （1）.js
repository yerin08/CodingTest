function solution(my_string) {
    const answer = [];
    
    for (let c of my_string) {
        if (!isNaN(c)) answer.push(parseInt(c));
    }

    answer.sort((a, b) => a - b);
    
    return answer;
}