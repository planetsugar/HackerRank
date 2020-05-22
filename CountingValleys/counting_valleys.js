//const journey = 'UDDDUDUU';
// const journey = 'DDDDDDUUU';
// const journey = '';
//const journey = 'UUUUUDDDDDDUUDDUU';

const countingValleys = (n, s) => {

    let level = 0;
    let in_valley = false;
    let valley_count = 0;
    let steps = n;
    
    
    Array.from(s).map((step) => {
    
        if (!steps) {
            return;
        }
    
        if (step === 'U') {
            level++;
        }
        else {
            level--;
        }
    
        if (level === 0 && in_valley) {
            valley_count++;
            in_valley = false;
        }     
    
        if (level < 0) {
            in_valley = true; 
        }
        
        if (level > 0) {
            in_valley = false;
        }

        steps--;
    });

    return (valley_count);       
}   

console.log(countingValleys(journey.length, journey));

