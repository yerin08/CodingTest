function solution(my_str, n) {
    const answer = [];
    const str_list = [...my_str];
    
    while (str_list.length !== 0) {
        answer.push(str_list.splice(0, n).join(''));
    }
    
    return answer;
}