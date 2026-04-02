function solution(numer1, denom1, numer2, denom2) {
    let numer = (numer1 * denom2) + (numer2 * denom1);
    let denom = denom1 * denom2;
    
    let divArr = [];
    let min = numer < denom ? numer : denom;
    
    for (let i = 1; i <= min; i++) {
        if (min % i === 0) {
            divArr.push(i);
        }
    }
    
    divArr.sort((a, b) => b - a);
    
    for (let item of divArr) {
        if (numer % item === 0 && denom % item === 0) {
            numer /= item;
            denom /= item;
        }
    }
    
    return [numer, denom];
}