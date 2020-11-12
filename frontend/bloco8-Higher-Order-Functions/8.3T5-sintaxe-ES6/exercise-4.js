const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

/*
    Escreva uma função filterPeople que, dada uma lista 
    de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
*/

// escreva filterPeople abaixo
const filterPeople = (people) => {
    const result = people.filter(({bornIn, nationality}) => bornIn > 1900 && bornIn < 2000 && nationality == "Australian");
    return result;
}

const filteredPeople = filterPeople(people);
console.log(filteredPeople);

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })

