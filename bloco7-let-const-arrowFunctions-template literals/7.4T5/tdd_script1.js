const assert = require('assert');

/*
  Dados os casos de testes abaixo, escreva as funções de forma a passar 
  nos testes. É importante nunca alterar os testes ou as variáveis já escritas no código:
*/

// escreva a função addOne para passar nos testes abaixo:
const addOne = (arr) => {
  let arrayNew = [];
  for (let i = 0; i < arr.length; i++) {
    arrayNew.push(arr[i] + 1);
  }
  return arrayNew;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
