/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    example: [number, string]; // Tuple
} = {
    name: 'Alex',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    example: [2, 'author'],
} */

enum Role { ADMIN, READ_ONLY, AUTHOR} // Enum

const person = {
    name: 'Alex',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    example: [2, 'author'], // Tuple
    role: Role.ADMIN
}

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking'];

console.log(person.name);


for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());  
}