function solution(score) {
    const avg = [];
    
    for (let arr of score) {
        avg.push((arr[0] + arr[1]) / 2);
    }
    
    
    
    return avg.map(score => avg.filter(s => s > score).length + 1);
}