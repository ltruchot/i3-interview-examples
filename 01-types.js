// -----------------------------------------------------------------------------
// Décrire le code suivant
var prenom1 = 'Peach';
var prenom2 = prenom1;

// Quelle est la valeur de prenom2 ?
console.log(prenom2);

prenom1 = 'Mario';
// Quelle est la valeur de prenom2 ?
console.log(prenom2);

// -----------------------------------------------------------------------------
// Décrire le code suivant
var personne1 = {
  prenom: 'Luigi',
  nom: 'Miyamoto'
};
var personne2 = personne1;

// Quelle est la valeur de personne2.prenom ?
console.log(personne2.prenom);

personne1.prenom = 'Toad';
// Quelle est la valeur de personne2.prenom ?
console.log(personne2.prenom);

// -----------------------------------------------------------------------------
// Que vont écrire dans la console les lignes suivantes ?
console.log('42' == 42);
console.log('42' === 42);

// -----------------------------------------------------------------------------
// Les curiosités de JavaScript
console.log(NaN === NaN); // va écrire « false » dans la console
// Connaissez vous d'autres curiosités inattendues deJavaScript  ?
console.log(typeof null);
console.log(0.1 + 0.2);
// @see https://github.com/denysdovhan/wtfjs
