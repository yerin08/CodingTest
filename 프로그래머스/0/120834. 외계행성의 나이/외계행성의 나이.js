function solution(age) {
    var answer = '';
    
    for (let num of String(age)) {
        answer += String.fromCharCode(97 + parseInt(num));
    }
    
    return answer;
}