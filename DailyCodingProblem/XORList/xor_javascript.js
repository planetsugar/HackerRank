//const source = [25, 10, 2, 8, 5, 3];
const source = [1, 2, 3, 4, 5, 6, 7]
let max = 0;

for(let outer=0;outer<source.length;outer++) {

    const outerValue = source[outer];

    for(let inner=outer+1;inner<source.length;inner++) {
        const innerValue = source[inner];
        max = (outerValue ^ innerValue) > max ? outerValue ^ innerValue : max;
        console.log(`${outerValue} ^ ${innerValue} = ${outerValue ^ innerValue}, max = ${max}`);
    }
}

console.log(max);