function solution(emergency) {
    const original_emer = [...emergency]
    
    emergency.sort((a, b) => b - a);
    
    return original_emer.map((e) => emergency.indexOf(e) + 1);
}