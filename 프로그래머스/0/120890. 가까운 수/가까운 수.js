function solution(array, n) {
    let index = 0;
    let prev = Math.abs(n - array[0]);
    
    for (let i = 1; i < array.length; i++) {
        let cur = Math.abs(n - array[i]);
        if (cur < prev) {
            index = i;
            prev = cur;
        } else if (cur === prev) {
            index = array[i] <= array[index] ? i : index;
        }
    }
    
    return array[index];
}