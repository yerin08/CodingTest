function solution(dots) {
    const height = [];
    const width = [];
    
    dots.forEach(arr => {
        width.push(arr[0]);
        height.push(arr[1]);
    });

    return Math.abs((Math.max(...width) - Math.min(...width)) * (Math.max(...height) - Math.min(...height)));
}