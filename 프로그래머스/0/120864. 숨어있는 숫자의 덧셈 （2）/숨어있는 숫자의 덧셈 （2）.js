function solution(my_string) {
    const num_list = [];
    let num = '';
    
    [...my_string].forEach(c => {
        if (isNaN(c) === false) {
            num += c;
            console.log(num);
        } else {
            num_list.push(Number(num));
            num = '';
        }
    });
    
    num_list.push(Number(num));

    return num_list.reduce((a, b) => a + b, 0);
}