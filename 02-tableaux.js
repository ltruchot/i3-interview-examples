// -----------------------------------------------------------------------------
// Décrire le code suivant
const students = [
  { name: 'Loïc', age: 33 },
  { name: 'Sabrina', age: 35 },
  { name: 'Philippe', age: 24 }
];

// ajouter son profil au personnel de l'entreprise
students.push({ name: 'Nathalie', age: 28 });
console.log(students);

// afficher le name un par un dans la console
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
students.forEach(item => console.log(item.name));

// ajouter l'école « school: "Interface3" » à chacun des étudiants
for (let i = 0; i < students.length; i++) {
  students[i].school = 'Interface3';
}
console.log(students);
console.log(students.map(item => ({ ...item, school: 'Interface3' })));

// -----------------------------------------------------------------------------
// Proposez un algorithme pour calculer la moyenne d'âge chez Interface3
let total = 0;
for (let i = 0; i < students.length; i++) {
  total += students[i].age;
}
const moyenne = total / students.length;
console.log(moyenne);
console.log(students.reduce((acc, cur) => acc + cur.age, 0) / students.length);
