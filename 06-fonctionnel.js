// -----------------------------------------------------------------------------
// Décrire le code suivant
const doubler = a => a * 2;
// en JavaScript, peut-on passer une fonction en argument à une fonction ?

function ecrire(fn, a) {
  const resultat = fn(a);
  console.log(resultat);
}
ecrire(doubler, 10);
console.log([1, 2, 3].map(doubler));

// en JavaScript une fonction peut-elle retourner une fonction ?
function memoriser(a) {
  return function() {
    return a;
  };
}
const get42 = memoriser(42);
console.log(get42());

// en JavaScript, est ce que la syntaxe suivante est valide ?
const fn = a => b => a;
console.log(fn('Peach')('Mario'));
