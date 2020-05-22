const assert = ((g,message = 'error') => {
    if (!g) {
        throw Error(message)
    }
});


const howManyAnagrams = anaString => {

    const anagramIndexAtLevel = (level, str) => {
        if (str.length === 1) {
            return [];
        }
    
        const levelItems = [];
        const charsUnsorted = str.slice(0,level); 
        const charsSorted = charsUnsorted.split('').sort().join('');
        for(let index in str) {
            if (index == 0) {
                continue;
            }
            const last = parseInt(index) + level;
            const unsorted = str.slice(index, last); 
            const sorted = unsorted.split('').sort().join(''); 
            if (sorted === charsSorted) { 
                levelItems.push(`[${charsUnsorted}, ${unsorted}]`);
            }
        }    
        
        // console.log(`Count: ${levelItems.length} -> ${levelItems}, ${level}`);
    
        const returned = anagramIndexAtLevel(level, str.substr(1));
        return levelItems.concat(returned);
    }
    
    let count = 0;
    for (let level = 1;level<=anaString.length;level++) {
        count += (anagramIndexAtLevel(level, anaString)).length;
    }
    
    return count;
} 

assert(howManyAnagrams('mom') === 2, 'mom');
assert(howManyAnagrams('cdcd') === 5, 'cdcd');
assert(howManyAnagrams('abba') === 4, 'abba');
assert(howManyAnagrams('abcd') === 0, 'abcd');
assert(howManyAnagrams('ifailuhkqq') === 3, 'ifailuhkqq');
assert(howManyAnagrams('kkkk') === 10, 'kkkk');
