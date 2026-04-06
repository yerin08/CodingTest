function solution(num_list) {
    let cnt_even = 0;
    let cnt_odd = 0;
    
    for (let n of num_list) {
        if (n % 2 === 0) {
            cnt_even++;
        } else {
            cnt_odd++;
        }
    }
    return [cnt_even, cnt_odd];
}