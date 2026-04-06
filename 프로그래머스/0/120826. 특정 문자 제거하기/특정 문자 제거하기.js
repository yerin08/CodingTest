function solution(my_string, letter) {
    var answer = '';
    
    for (let c of my_string) {
        if (c !== letter) {
            answer += c;
        }
    }
    return answer;
}