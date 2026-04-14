function solution(n) {
    let i = 2;
    let fac = 1;
    
    while (1) {
        fac *= i;
        if (fac === n) return i;
        else if (fac >= n) return i -1;
        i++;
    }
    
}