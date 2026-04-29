function solution(a, b) {
    const min_num = Math.min(a, b);
    
    for (let i = min_num; i >= 2; i--) {
        if (a % i === 0 && b % i === 0) {
            b /= i;
            break;
        }
    }
    
    while (b !== 1) {
        for (let j = 2; j <= b; j++) {
            if (b % j === 0) {
                if (j !== 2 && j !== 5) return 2;
                b /= j;
                break;
            }
        }
    } return 1;
    
}