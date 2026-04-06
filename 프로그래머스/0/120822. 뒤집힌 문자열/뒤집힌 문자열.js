function solution(my_string) {
    const str_arr = [];
    const reversed_str = [];
    const l = my_string.length;
    
    for (let char of my_string) {
        str_arr.push(char);
    }
    
    for (let i = 0; i < l; i++) {
        reversed_str.push(str_arr.pop());
    }
    
    return reversed_str.join('');
}