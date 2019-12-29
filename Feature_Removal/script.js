const { createInterface } = require('readline');
const fs = require('fs');

fs.writeFile('RemainingFeatures.txt','',(error) => console.log(error));

const featureToDelete = async () => {
    const s = new Set();
    const rl = createInterface({
        input: fs.createReadStream('./FeaturesToDelete.txt'),
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        s.add(line);
    });

    rl.on('error', (error) => {
        throw error;
    });

    await new Promise((resolve => rl.on('close', resolve)));
    return (s);
};

const parseFeatureFile = async ({s, writer}) => {

    const parseLine = line => parseInt(line.split(',')[0]);

    const rl = createInterface({
        input: fs.createReadStream('./Features.txt'),
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        const lineNumber = parseLine(line);
        if (!s.has(lineNumber)) {
            writer(line);   
        }
    });

    rl.on('error', (error) => {
        throw error;
    });

    await new Promise((resolve => rl.on('close', resolve)))
}

const start = new Date()
featureToDelete()
    .then(s => parseFeatureFile({s, writer: line => fs.appendFile('./RemainingFeatures.txt', `${line}\n`, () => null)}))
    .then(() => { const end = new Date() - start
        console.info('Execution time: %d seconds', (end / 1000)) })
    .catch(error => console.error(error));
