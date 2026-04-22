function solution(my_string) {
    const str_list = [...my_string.toLowerCase()];
    str_list.sort();
    return str_list.join('');
}