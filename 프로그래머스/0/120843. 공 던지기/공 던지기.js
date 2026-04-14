function solution(numbers, k) {
    let turn = 2 * (k - 1);
    
    if (turn <= numbers.length - 1) {
        return numbers[turn];
    } else {
        return numbers[turn % numbers.length];
        
    }

}