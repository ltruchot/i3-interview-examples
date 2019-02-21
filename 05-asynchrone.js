// -----------------------------------------------------------------------------
// Décrire le code suivant
const axios = require('axios');
const data = axios.get('https://jsonplaceholder.typicode.com/todos/1');
let a = 42;
// Les data arriveront-elles AVANT ou APRÈS que « a » prenne la valeur 42 ?

// axios.get retourne une promesse. Écrire les data reçues dans la console.

data
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
console.log(a);
