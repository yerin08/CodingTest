function solution(sides) {
    return (sides.reduce((a, b) => a + b, 0) - Math.max(...sides) - 1) + (Math.max(...sides) - Math.abs(sides[0] - sides[1]));
}