// -----------------------------------------------------------------------------
// De quoi ES6 est-il l'acronyme ?
// Citer trois fonctionnalités qui n'existent que depuis ES6
const students = [
  { name: 'Loïc', age: 33 },
  { name: 'Sabrina', age: 35 },
  { name: 'Philippe', age: 24 }
];
students.push({ name: 'Nathalie', age: 28 });
students.forEach(item => console.log(item.name));
let i3Students = students.map(function(item) {
  return { ...item, school: 'Interface3' };
});
console.log(i3Students);
