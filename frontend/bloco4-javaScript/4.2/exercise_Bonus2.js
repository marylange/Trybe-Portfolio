//Ordene o array numbers em ordem decrescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

numbers.sort((a, b) => {
    return b - a;
});
console.log(numbers);