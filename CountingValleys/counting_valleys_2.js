//const journey = 'UDDDUDUU';
// const journey = 'DDDDDDUUU';
// const journey = '';
const journey = 'UUUUUDDDDDDUUDDUU';

const countingValleys = (n, s) => {

    let level = 0;
    let in_valley = false;
    let valley_count = 0;
    let steps = n;
    
    
    Array.from(s).map((step) => {
    
        if (!steps) {
            return;
        }
   
        level = level + (step === 'U' ? 1 : -1);
    
        in_valley = level < 0;

        if (level === 0 && in_valley) {
            valley_count++;
        }     
    
        steps--;
    });

    return (valley_count);       
}   

console.log(countingValleys(journey.length, journey));

