function solution(num_list) {
    let multiply = 1;
    let sum = 0;
    
    for (let num of num_list) {
        multiply *= num;
        sum += num;
    }
    
    return multiply < sum ** 2 ? 1 : 0;
}