function solution(num, k) {
    const num_list = String(num).split('');
    
    return num_list.includes(String(k)) === true ? num_list.indexOf(String(k)) + 1: -1;
}