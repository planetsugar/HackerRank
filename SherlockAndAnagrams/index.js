let source = 'aba';
const dict = {};

while(source) {
    console.log(source);
    let tempString = '';
    for(let index in source) {
        tempString += source[index];
        const sortedString = tempString.split('').sort().join('');
        dict[sortedString] = dict[sortedString] + 1 | 1; 
    }
    
    const newSource = source.split('');
    newSource.shift();
    source = newSource.join('');
}

console.log(dict);