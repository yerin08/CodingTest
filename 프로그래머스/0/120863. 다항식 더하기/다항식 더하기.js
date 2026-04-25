function solution(polynomial) {
    let constant = 0;
    let coefficient = 0;
    
    polynomial.split(' + ').forEach(item => {
        if (item === "x") {
            coefficient += 1;
        } else if (item.includes('x')) {
            coefficient += Number(item.slice(0, -1));
        } else {
            constant += Number(item);
        }
    });
    
    if (coefficient === 0) {
        return String(constant);
    } else {
        if (coefficient === 1) {
            if (constant === 0) {
                return "x";
            } else {
                return "x + " + constant;
            }
        } else {
            if (constant === 0) {
                return coefficient + "x";
            } else {
                return coefficient + "x + " + constant;
            }
        }
    }
}