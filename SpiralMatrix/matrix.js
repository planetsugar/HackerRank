const matrix = size => {
        
    const range = range => [...Array(range).values()];
    const insert = (r, c, v) => returnMatrix[r][c] = v;
    const empty = (r, c) => returnMatrix[r][c] === undefined && r;

    const returnMatrix = [];

    for (let row = 0; row < size; row++) {
        returnMatrix.push(range(size));
    }

    let left = 0;
    let right = size - 1;
    let top = 0;
    let bottom = size - 1;

    //for (let count = 1; count < size + 1; count++) {
        // Move right for loop 
    let counter = 1;

    while (counter<=(size * size)) {
        for(let column = left; column<=right; column++) {
            insert(top, column, counter++);
        }
        top++;

        for (let row=top;row<=bottom;row++) {
            insert(row, right, counter++);
        }
        right--;

        for (let column=right;column>=left;column--) {
            insert(bottom, column, counter++);
        }
        bottom--;

        for (let row=bottom;row>=top;row--) {
            insert(row, left, counter++);
        }
        left++;
    }

    return returnMatrix;
}

console.log(matrix(5));