enum Role {ADMIN, READ_ONLY, AUTHOR = 300}

interface human {
    name: string;
    age: number;
    hobies: string[];
    tuple: [number, string, boolean]
    role: Role
}

const man: human = {
    name: 'Alex',
    age: 30,
    hobies: ['Sport', 'Skies'],
    tuple: [0, 'lorem', true],
    role: Role.ADMIN
}

const man2: human = {
    name: 'Alex',
    age: 30,
    hobies: ['Sport', 'Skies'],
    tuple: [0, 'lorem', true],
    role: Role.AUTHOR
}


const person = {
    name: 'Alex',
    age: 30,
    hobies: ['Books', 'Sport']
}

console.log(man2);
