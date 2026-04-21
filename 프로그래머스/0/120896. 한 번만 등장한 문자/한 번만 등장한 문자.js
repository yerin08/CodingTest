function solution(s) {
    const answer = [];
    const s_arr = [...s];
    const s_arr_length = s_arr.length;
    let c = '';
    
    for (let i = 0; i < s_arr_length; i++) {
        c = s_arr.shift();
        if (s_arr.includes(c)) {
            s_arr.push(c);
        } else {
            answer.push(c);
        }
    }
    
    answer.sort();
    
    return answer.join('');
}