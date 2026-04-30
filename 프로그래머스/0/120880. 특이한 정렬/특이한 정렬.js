function solution(numlist, n) {
    const num_dict = {};
    let min_value = 0;
    const answer = [];
    
    numlist.forEach(i => num_dict[i] = Math.abs(n - i));
    console.log(num_dict);
    const value_list = [...new Set([...Object.values(num_dict).sort((a, b) => a - b)])];
    console.log(value_list);
    const key_list = Object.keys(num_dict);
    console.log(key_list);
    
    while (value_list.length !== 0) {
        min_value = value_list.shift();
        console.log(min_value);
        let add_nums = key_list.filter(key => num_dict[key] === min_value);
        add_nums = add_nums.map(Number).sort((a, b) => b - a);
        console.log(add_nums);
        answer.push(...add_nums);
    } 
    
    return answer;
}