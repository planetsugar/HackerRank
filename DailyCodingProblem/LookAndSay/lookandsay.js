const { assert } = require('../../utils/assert');

const look = (s => {
    const lookResults = [];
    let previousChar = null;
    let charCount = {};
    s.split('').forEach(c => {
        if (!previousChar || c === previousChar) {
            if (!previousChar) {
                charCount[c] = 1;
            } else {                
                charCount[c]++; 
            }
        } else {
            lookResults.push(charCount);
            charCount = {};
            charCount[c] = 1;
        }
        previousChar = c;
    }); 
    lookResults.push(charCount);
    return lookResults;
});

const say = (l => {
    let returnSay = '';
    l.forEach(sayObj => {
        const key = Object.keys(sayObj)[0];
       // console.log(sayObj[key]);
        returnSay += `${sayObj[key]}${key}`;
    });

    return returnSay;
});

const lookAndSay = n => {
    returnValue = n > 0 ? '1' : '';
    line = 0;
    for(let line=1;line<n;line++) {
        returnValue = say(look(returnValue));
    }

    return returnValue;
}

assert(lookAndSay(0) === '', 'Empty wrong');
assert(lookAndSay(1) === '1', '1 wrong');
assert(lookAndSay(2) === '11', '2 wrong');
assert(lookAndSay(3) === '21', '3 wrong');
assert(lookAndSay(4) === '1211', '4 wrong');
assert(lookAndSay(5) === '111221', '5 wrong');