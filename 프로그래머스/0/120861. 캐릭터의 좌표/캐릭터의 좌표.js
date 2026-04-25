function solution(keyinput, board) {
    const result = [0, 0];
    const left_right = Math.floor(board[0]/2);
    const up_down = Math.floor(board[1]/2);
    
    keyinput.forEach(key => {
        if (key === "right" && result[0] < left_right) {
            result[0] += 1;
        } else if (key === "left" && result[0] > -left_right) {
            result[0] -= 1;
        } else if (key === "up" && result[1] < up_down) {
            result[1] += 1;
        } else if (key === "down" && result[1] > -up_down){
            result[1] -= 1;
        }
    });
    
    return result;
}