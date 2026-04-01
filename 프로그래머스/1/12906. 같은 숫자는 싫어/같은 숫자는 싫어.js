function solution(arr) {
    let answer = [];

    for (let item of arr) {
        if (!answer) {
            answer.push(item);
            continue;
        } else {
            let prev = answer[answer.length - 1];
            
            if (prev === item) {
                continue;
            } else {
                answer.push(item);
            }
        }
    }
    return answer;
}