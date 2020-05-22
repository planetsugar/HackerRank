const SnakeToCamel = (snakeString) => {
    return snakeString.split('_').map((part, index) => {
        return index === 0 ? part : part[0].toUpperCase() + part.slice(1);
    }).join('');
}

console.log(SnakeToCamel('accounting_books_total'));
console.log(SnakeToCamel('error_code'));
console.log(SnakeToCamel('first_name'));