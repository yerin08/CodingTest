function solution(my_string) {
    const str_arr = my_string.split(' ');
    let answer = Number(str_arr[0]);
    
    for (let i = 1; i < str_arr.length; i++) {
        if (str_arr[i] === "+") {
            answer += Number(str_arr[i + 1]);
        } else if (str_arr[i] === "-") {
            answer -= Number(str_arr[i + 1]);
        }
    }
    
    return answer;
}