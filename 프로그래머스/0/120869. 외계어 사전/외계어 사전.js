function solution(spell, dic) {
    
    for (let str of dic) {
        let count = 0;
        for (let c of spell) {
            if (str.includes(c)) {
                count++;
                if (count === spell.length) return 1;
                continue;
            } else {
                break;
            }
        }
    } return 2;

}