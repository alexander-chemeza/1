function combine (n1: number | string, n2: number | string) {
    const res = +n1 + +n2;
    if (!isNaN(res)) {
        console.log(res);
    } else {
        throw 'Invalid user input'
    }
    return res;
}

combine('7', 8);

type United = {
    number: number,
    state: boolean
}

const test: United = {
    number: 0,
    state: true
}

console.log(test);
