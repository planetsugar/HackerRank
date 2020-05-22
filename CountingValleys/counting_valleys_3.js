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
    
        if (!step) {
            return;
        }

        if (step === 'D') {
            level --;
        }

        if (step === 'U') {
            level ++;
            if (level === 0) {
                valley_count ++;
            }
        }
    
        steps--;
    });

    return (valley_count);       
}   

console.log(countingValleys(journey.length, journey));

