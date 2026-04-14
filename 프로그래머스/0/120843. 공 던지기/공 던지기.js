function solution(numbers, k) {
    let turn = 2 * (k - 1);
    
    return numbers[turn % numbers.length];
}