function solution(n) {
    let answer = 0;
    const n_list = String(n).split('');
    
    n_list.forEach(item => answer += Number(item));
    
    return answer;
}