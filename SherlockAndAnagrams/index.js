let source = 'cdcd';
const pairs = {};

const anagramIndexAtLevel = (level, str) => {
    if (str.length === 1) {
        return [];
    }

    const levelItems = [];
    const chars = str[0]; 
    for(let index in str) {
        if (index == 0) {
            continue;
        }
        if (str[index] === chars) {
            levelItems.push([chars, str[index]]);
        }
    }    

    const returned = anagramIndexAtLevel(level, str.substr(1));
    return levelItems.concat(returned);
}

pairs["1"]=(anagramIndexAtLevel(1, 'cdcd'));

/*
while(source) {
    // console.log(source);
    
    const newSource = source.split('');
    newSource.shift();
    source = newSource.join('');
}
*/
console.log(pairs);