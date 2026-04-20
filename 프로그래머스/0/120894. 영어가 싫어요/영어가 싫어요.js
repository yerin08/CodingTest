function solution(numbers) {
    let num_dict = {"zero" : "0", "one" : "1", "two" : "2", "three" : "3", "four" : "4", "five" : "5", "six" : "6", "seven" : "7", "eight" : "8", "nine" : "9"};
    let num_str = "";
    let answer = "";
    for (let c of numbers) {
        num_str += c;
        if (num_dict[num_str]) {
            answer += num_dict[num_str];
            num_str = "";
        }
    }
    
    return parseInt(answer);
}