function solution(num_list) {
    let multiply = 1;
    let sum = 0;
    
    for (let num of num_list) {
        multiply *= num;
        sum += num;
    }
    
    if (multiply < sum * sum) return 1;
    else return 0;
}