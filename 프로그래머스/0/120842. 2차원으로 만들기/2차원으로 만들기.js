function solution(num_list, n) {
    const index = parseInt(num_list.length / n);
    const answer = new Array(index);
    
    for (let i = 0; i < index; i++) {
        answer[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            answer[i][j] = num_list.shift();
        }
    }
    
    return answer;
}