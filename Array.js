// ----- Array ------ //

// Creation d'un array
let arr = [1, 2, 3, 8, 42]; // Resultat : [1, 2, 3];

// Ajout d'un element en fin de tableau
arr.push(4);
console.log("PUSH ->", arr); // resultat : [1, 2, 3, 4];

// Supprimer un element en fin de tableau
arr.pop();
console.log("POP ->", arr); // resultat : [1, 2, 3];

// Ajout d'un element en debut de tableau
arr.unshift(10);
console.log("UNSHIFT ->", arr); // Resultat : [10 ,1 ,2 ,3];

// Supprimer un element en debut de tableau
arr.shift();
console.log("SHIFT ->", arr); // Resultat : [1, 2, 3];

// Creer un nouveau tableau Ã  partir d'un tableau existant sans modifier les valeurs de l'original
const arrMap = arr.map((x) => x * 2);
console.log("MAP ->", arrMap); // Resultat : [2, 4, 6];
// console.log(arr);

// Creer un nouveau tableau Ã  partir d'un tableau existant, en filtrant les elements suivant une condition
const arrFilter = arr.filter((x) => x % 2 === 0);
console.log("FILTER ->", arrFilter); // Resultat : [2]

// Appliquer une fonction qui est un accumulateur et chaque valeur du tableau (de gauche Ã  droite)
// de maniÃ¨re Ã  la reduire Ã  une seule valeur.
// .reduce((accumulator, current) => accumulator + current, initialValue)
// Au premier appel sum est equivalent Ã  l'initialValue (0) et current vaut la valeur du premier index (1)
// Ce qui donne = sum : 1
// ...
const arrReduce = arr.reduce((sum, current) => sum + current, 0);
console.log("REDUCE ->", arrReduce); // Resultat : 6

// Effectuer une operation sur chaque element d'un tableau
arr.forEach((num, idx) => console.log(`FOREACH -> : Index ${idx} : ${num}`));

// Test si au moins un element dans le tableau passe un test
const hasNagativeNumbers = [-3, -1, 2, 4].some((num) => num < 0);
console.log(`SOME -> ${hasNagativeNumbers}`); // Resultat : true

// Test si tous les elements dans le tableau correspondent a une condition
const allPositiveNumbers = [-2, 1, 2, 3, 5].every((num) => num > 0);
console.log(`EVERY -> ${allPositiveNumbers}`); // false

// Renvoi la premiere occurence d'une valeur qui passe un test
console.log(
    "FIND ->",
    arr.find((x) => x > 2)
); // Resultat : 3

// Renvoi la derniere occurence d'une valeur qui passe un test
console.log(
    "FINDLAST ->",
    arr.findLast((x) => x > 2)
); // Resultat : 42

// Renvoi un booleen pour confirmer ou non l'existence d'un element dans un tableau
console.log("INCLUDES ->", arr.includes(8)); // true

// Renvoi l'index de la premiere occurence d'une valeur recherchee
console.log("INDEXOF ->", arr.indexOf(3)); // Resultat : 2

// Aplatit un tableau multi-dimensionnel en une seule dimension
const arrMulti = [1, 2, [3, 4, [5, 6]]];
console.log("FLAT ->", arrMulti.flat(2)); // Resultat : [1,2,3,4,5,6];

// Effectuer un processus sur chaque element d'un tableau multidimensionnel puis l'aplatir
const arrMulti2 = [
    [2, 3],
    [4, 5],
];
console.log(
    "FLATMAP ->",
    arrMulti2.flatMap((x) => x.map((elem) => elem * elem))
); // resultat : [4,9,16,25]

// Trier un tableau de nombre
const arr2 = [24, 3, 98, 50, 42];
console.log(
    "SORT ->",
    arr2.sort((a, b) => b - a)
);