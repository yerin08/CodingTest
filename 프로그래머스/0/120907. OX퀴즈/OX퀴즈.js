function plus_minus(str) {
    const str_list = str.split(' ');
    let answer = Number(str_list[0]);
    
    for (let i = 1; i < str_list.length; i++) {
        if (str_list[i] === "+") {
            answer += Number(str_list[i+1]);
        } else if (str_list[i] === "-") {
            answer -= Number(str_list[i+1]);
        }
    }
    
    return answer === Number(str_list[4]) ? "O" : "X";
}

function solution(quiz) {
    const answer = [];
    
    for (let str of quiz) {
        answer.push(plus_minus(str));
    }
    
    return answer;
}