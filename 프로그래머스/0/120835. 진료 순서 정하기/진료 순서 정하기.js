function solution(emergency) {
    const answer = [];
    const original_emer = [...emergency]
    
    emergency.sort((a, b) => b - a);
    
    for (let e of original_emer) {
        answer.push(emergency.indexOf(e) + 1);
    }
    
    return answer;
}