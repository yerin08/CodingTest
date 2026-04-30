function solution(numlist, n) {
    const num_dict = {};
    let min_value = 0;
    const answer = [];
    
    numlist.forEach(i => num_dict[i] = Math.abs(n - i));

    const value_list = [...new Set([...Object.values(num_dict).sort((a, b) => a - b)])];
    const key_list = Object.keys(num_dict);
    
    while (value_list.length !== 0) {
        min_value = value_list.shift();
        let add_nums = key_list.filter(key => num_dict[key] === min_value);
        add_nums = add_nums.map(Number).sort((a, b) => b - a);
        answer.push(...add_nums);
    } 
    
    return answer;
}