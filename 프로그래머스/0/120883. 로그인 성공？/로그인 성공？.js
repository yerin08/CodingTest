function solution(id_pw, db) {
    let answer = "fail";
    
    for (let info of db) {
        if (id_pw[0] === info[0] && id_pw[1] === info[1]) {
            return "login";
        } else if (id_pw[0] === info[0] && id_pw[1] !== info[1]) {
            answer = "wrong pw";
        }
    }
    
    return answer;
}