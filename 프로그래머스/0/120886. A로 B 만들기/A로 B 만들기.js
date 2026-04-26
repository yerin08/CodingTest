function solution(before, after) {
    const after_list = [...after];
    
    for (let c of before) {
        let index = after_list.indexOf(c);
        if (index !== -1) after_list.splice(index, 1);
    }
    
    return after_list.length === 0 ? 1 : 0;
}