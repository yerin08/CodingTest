function solution(rsp) {
    let answer = '';
    const rsp_dict = {
        "2" : "0",
        "0" : "5",
        "5" : "2"
    }
    
    for (let key of rsp) {
        answer += rsp_dict[key];
    }
    
    return answer;
}