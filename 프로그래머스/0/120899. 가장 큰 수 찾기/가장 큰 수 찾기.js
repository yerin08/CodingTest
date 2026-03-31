function solution(array) {
    let maxInt = Math.max(...array);
    
    return [maxInt, array.indexOf(maxInt, 1)];
}