// STRING //

// concaténation
console.log('Hello' + ' ' + 'World')

// Templates
const message = 'Hello'
console.log(`${message} World`)

// Escape character
console.log('Hello\nWorld')

// Convertire en majuscule
console.log('Hello'.toUpperCase())

// Convertir en minuscule
console.log('HELLO'.toLowerCase())

// Découper un sring en plusieurs morceau en créant un tableau
console.log('Hello World'.split(' '))

// Remplacer un élément dans un string
console.log('Hello World'.replace('World', 'Earth'))

// Remplacer tout les éléments d'un string correspondant
console.log("Un ordinateur avec un écran, un clavier et un curseur".replaceAll("un", 'des'))

// Vérifier si un string se termine par un élément
console.log('Hello World'.endsWith('World'))

// Vérifier si une string commence par un élément
console.log('Hello World'.startsWith('Hello'))

// Répétition de string
console.log('Hello '.repeat(3))

// Découper un string entre deux index
console.log('Hello World'.substring(-3, -1))
console.log('Hello World'.slice(0, 4))