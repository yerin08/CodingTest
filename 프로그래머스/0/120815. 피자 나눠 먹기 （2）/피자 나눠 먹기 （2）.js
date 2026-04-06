function solution(n) {
    let pizza = 1;
    
    while (1) {
        if ((6 * pizza) % n === 0) return pizza;
        pizza++;
    }
}