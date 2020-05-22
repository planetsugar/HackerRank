const assert = ((g,message = 'error') => {
    if (!g) {
        throw Error(message)
    }
});


const howManyAnagrams = anaString => {

    const anagramIndexAtLevel = (level, anaString) => {

        if (anaString.length === 1) {
            return 0;
        }
    
        const sortString = str => {
            return str.split('').sort().join('');
        }
        
        let levelItems = 0;
        const charsUnsorted = anaString.slice(0,level); 
        const charsSorted = sortString(charsUnsorted);

        for (let index = 1;index<anaString.length;index++) {

            const unsorted = anaString.slice(index, index + level); 
            const sorted = unsorted.split('').sort().join(''); 
            levelItems += sorted === charsSorted ? 1 : 0;

        }    

        // console.log(`Count: ${levelItems.length} -> ${levelItems}, ${level}`);
    
        return levelItems += anagramIndexAtLevel(level, anaString.substr(1));
    }
    
    let count = 0;
    for (let level = 1;level<=anaString.length;level++) {
        count += (anagramIndexAtLevel(level, anaString));
    }
    
    return count;
} 

assert(howManyAnagrams('mom') === 2, 'mom');
assert(howManyAnagrams('cdcd') === 5, 'cdcd');
assert(howManyAnagrams('abba') === 4, 'abba');
assert(howManyAnagrams('abcd') === 0, 'abcd');
assert(howManyAnagrams('ifailuhkqq') === 3, 'ifailuhkqq');
assert(howManyAnagrams('kkkk') === 10, 'kkkk');
