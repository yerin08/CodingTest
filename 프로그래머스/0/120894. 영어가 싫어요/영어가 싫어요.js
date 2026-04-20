function solution(numbers) {
    let num_dict = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    num_dict.forEach((str, idx) => numbers = numbers.replaceAll(str, idx));
    
    return Number(numbers);
}