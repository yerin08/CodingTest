function solution(s) {
    let answer = 0;
    const s_list = s.split(' ');
    
    for (let i = 0; i < s_list.length; i++) {
        if (s_list[i] === 'Z') {
            answer -= parseInt(s_list[i-1]);
        } else {
            answer += parseInt(s_list[i]);
        }
        
    }
    
    return answer;
}