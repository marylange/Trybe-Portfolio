// const assert = require('assert');

/*
    No código abaixo você tem a função getUser, que retorna uma pessoa qualquer. 
    Complete a função getUser de forma que ela receba uma outra função como parâmetro 
    para que possa realizar as operações abaixo sobre a pessoa retornada
*/

const userFullName = ({ firstName, lastName }) => console.log(`Hello! My name is ${firstName} ${lastName}`);
const userNationality = ({ firstName, nationality }) => console.log(`${firstName} is ${nationality}`);

const getUser = (callback, timeout) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  setTimeout(() => callback(userToReturn), 3000);
  timeout(userToReturn);
};

getUser(userFullName, userNationality);
assert.equal(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.equal(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser

/*
    No código abaixo você tem a função getUser modificada, que agora funciona 
    de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. 
    Complete a função getUser de forma que ela receba um callback para que possa realizar as 
    operações abaixo sobre a pessoa.
*/

const userFullName = ({ firstName, lastName }) => console.log(`Hello! My name is ${firstName} ${lastName}`);
const userNationality = ({ firstName, nationality }) => console.log(`${firstName} is ${nationality}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian"
    };
    callback(user);
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo


/*
    A função getCountry abaixo tem aproximadamente 50% de chance de obter 
    com sucesso um país, tendo um callback para poder ser feita qualquer operação 
    sobre o país retornado. Adicione um outro callback para getCountry, de forma que 
    trate a mensagem de erro retornada.
*/
const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currencys is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, error) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    }
    else {
        const errorMessage = "Country could not be found";
        error(errorMessage);
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryCurrency, printErrorMessage);
