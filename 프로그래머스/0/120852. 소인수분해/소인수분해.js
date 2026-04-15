function solution(n) {
    const answer = [];
    
    while(n !== 1) {
        for (let i = 2; i < n + 1; i++) {
            if (n % i === 0) {
                if (!answer.includes(i)) answer.push(i);
                n /= i;
                break;
            }
        }
    }
    
    return answer.sort((a, b) => a - b);
}