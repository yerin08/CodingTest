function solution(chicken) {
    let service_chicken = 0;
    
    while (chicken >= 10) {
        service_chicken += Math.floor(chicken / 10);
        
        chicken = Math.floor(chicken / 10) + (chicken % 10);
    }
    
    return service_chicken;
}