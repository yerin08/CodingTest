function solution(num_list) {
    let reverse_arr = [];
    const arr_length = num_list.length;
    
    for (let i = 0; i < arr_length; i++) {
        reverse_arr.push(num_list.pop());
    }
    return reverse_arr;
}