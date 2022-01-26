"use strict";
function combine(n1, n2) {
    const res = +n1 + +n2;
    if (!isNaN(res)) {
        console.log(res);
    }
    else {
        throw 'Invalid user input';
    }
    return res;
}
combine('7', 8);
const test = {
    number: 0,
    state: true
};
console.log(test);
//# sourceMappingURL=union-literal-alieses.js.map