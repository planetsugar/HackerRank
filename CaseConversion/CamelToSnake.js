const CamelToSnake = (camelString) => {
    let snakeString = camelString[0].toLowerCase();
    for(let letter=1;letter<camelString.length;letter++) {
        snakeString += camelString[letter] >= 'A' && camelString[letter] <= 'Z' 
                            ? camelString[letter-1] >= 'a' && camelString[letter-1] <= 'z'
                                ? '_' + camelString[letter].toLowerCase() 
                                : camelString[letter]
                            : camelString[letter];  
    }

    return snakeString;
};

console.log(CamelToSnake('AccountingTaxTotal'));
console.log(CamelToSnake('errorCode'));
console.log(CamelToSnake('Error'));
console.log(CamelToSnake('firstName'));