function solution(array) {
    const count = {};
    
    for (let item of array) {
        if (!count[item]) {
            count[item] = 1;
        } else {
            count[item] += 1;
        }
    }
    
    let cnt = Object.values(count);
    let max = Math.max(...cnt);
    
    if (cnt.filter((i) => i === max).length >= 2) {
        return -1;
    } else {
        return parseInt(Object.keys(count).find(key => count[key] === max));
    }

}