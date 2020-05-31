const assert = ((g,message = 'error') => {
    if (!g) {
        throw Error(message)
    }
});

/* Tests */ 

assert(1===1, 'True case has failed.'); //True

assert((() => {
    let hasFailed = false;

    try {
        assert(1===2);
    }
    
    catch (e) {
        hasFailed = true;
    }

    return hasFailed;
})(), 'False case has failed'); // False

module.exports = { assert };