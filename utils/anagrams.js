const { assert } = require('./assert');

const areAnagrams = (string1, string2) => {
    if (string1.length !== string2.length) {
        return false;
    }

    const stringAsObject = string => {
        let stringObj = {};
        for (let index = 0;index<string1.length;index++) {
            stringObj[string[index]] = stringObj[string[index]] ? stringObj[string[index]] + 1 : 1; 
        } 
        return stringObj;   
    };

    const string1Obj = stringAsObject(string1);
    const string2Obj = stringAsObject(string2);
    
    for (let field in string1Obj) {
        if (string1Obj[field] !== string2Obj[field]) {
            return false;
        }
    }

    for (let field in string2Obj) {
        if (string1Obj[field] !== string2Obj[field]) {
            return false;
        }
    }
    
    return true; 
};

/* Tests */ 

assert(areAnagrams('abc','abc'),'abc -> abc');
assert(areAnagrams('abc','cab'),'abc -> cab');
assert(!areAnagrams('abc','xyz'),'abc -> xyz');
assert(areAnagrams('paul','lpua'),'paul -> lpua');

module.exports = { areAnagrams };