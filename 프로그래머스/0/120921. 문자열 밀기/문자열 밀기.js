function solution(A, B) {
    if (A === B) return 0;
    
    const a_list = [...A];
    
    for (let i = 0; i < A.length - 1; i++) {
        a_list.unshift(a_list.pop());
        if (a_list.join('') === B) return i + 1;
    }
    
    return -1;
}