function solution(my_string) {
    const moeum = ['a', 'e', 'i', 'o', 'u'];
    let answer = '';
    
    for (let c of my_string) {
        if (!moeum.includes(c)) answer += c;
    }
    
    return answer;
}