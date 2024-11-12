// ARRAY //

const arr = [1, 2, 3, 4, 5]

// Ajouter à la fin
console.log(arr.push(6))

// Ajouter au début
console.log(arr.unshift(0))

// Supprimer dernier element
console.log(arr.pop())

// Supprimer premier element
console.log(arr.shift())

// Créer une copide d'un tableau
const arrMap = arr.map(item => item * 2)
console.log(arrMap)

// creer une copie en filtrant le contenu avec une condition
const arrFilter = arr.filter(item => item % 2 === 0)
console.log(arrFilter)

// Appliquer une fonction qui est un accumulateur sur chaque valeur du tableau de gauche à droite
// pour la réduire a une seul valeur
const arrReduce = arr.reduce((acc, item) => acc + item, 0)
console.log(arrReduce)

// Tester si un élément existe
console.log(arr.includes(3))
console.log(arr.some(item => item === 3)) // si au moins un élément
console.log(arr.every(item => item > 3)) // si tout les élément

// Chercher une valeur
console.log(arr.find(item => item > 3)) // premiere valeur supérieur a 3
console.log(arr.findLast(item => item > 3, true)) // renvois dernier valeur

// Aplatir un tableau multi en une dimention
const arrMulti = [1, 2, [3, 4, [5]]]
const arrFlat = arrMulti.flat(2) // zero maximum
console.log(arrFlat)

// Aplatir + map
// const arrMulti2 = [1, 2, [3, 4, [5]]]
// const arrFlat2 = arrMulti2.flatMap(item => item.map(item => item * 2))
// console.log(arrFlat2)

// trier tableau
const arrSort = arr.sort((a, b) => a - b)
console.log(arrSort)