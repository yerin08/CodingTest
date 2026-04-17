function solution(sides) {
    sides.sort((a, b) => a - b);
    const max = sides.pop();
    const others = sides.reduce((a, b) => a + b, 0);
    
    return max < others ? 1 : 2;
}