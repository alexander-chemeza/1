"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 300] = "AUTHOR";
})(Role || (Role = {}));
const man = {
    name: 'Alex',
    age: 30,
    hobies: ['Sport', 'Skies'],
    tuple: [0, 'lorem', true],
    role: Role.ADMIN
};
const man2 = {
    name: 'Alex',
    age: 30,
    hobies: ['Sport', 'Skies'],
    tuple: [0, 'lorem', true],
    role: Role.AUTHOR
};
const person = {
    name: 'Alex',
    age: 30,
    hobies: ['Books', 'Sport']
};
console.log(man2);
//# sourceMappingURL=obj-array-enums.js.map