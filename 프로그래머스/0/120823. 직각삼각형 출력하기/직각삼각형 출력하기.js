const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    
    solution(n);
});

function solution(n) {
    for (let i = 0; i < n; i++) {
        let star = '';
        for (let j = 0; j <= i; j++) {
            star += '*';
        }
        console.log(star);
    }
}