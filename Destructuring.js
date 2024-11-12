// Destructuring //

// Arrays
const fruits = ['Pomme', 'Poire', 'Cerise', 'Mangue', 'Avocat'];

// const f1 = fruits[0];
// const f2 = fruits[1];

// Destructuring basique
const [ premierFruit, deuxiemeFruit, troisiemeFruit] = fruits;
console.log('DESTRUCTURINGARRAY ->', premierFruit);
console.log('DESTRUCTURINGARRAY ->', deuxiemeFruit);
console.log('DESTRUCTURINGARRAY ->', troisiemeFruit);

// Sauter un index
const [ premierFruit2, deuxiemeFruit2, , orange] = fruits;
console.log('DESTRUCTURINGARRAYSKIP ->', premierFruit2);
console.log('DESTRUCTURINGARRAYSKIP ->', deuxiemeFruit2);
console.log('DESTRUCTURINGARRAYSKIP ->', orange);

// Dans le cas ou l'index n'existe pas, on peut donner une valeur par defaut
const voitures = ['VW'];
const [ premiereVoiture, deuxiemeVoiture = 'Volvo'] = voitures;
console.log('DESTRUCTURINGDEFAUT ->', premiereVoiture);
console.log('DESTRUCTURINGDEFAULT ->', deuxiemeVoiture)

// Utilisation du ... (rest operator) dans du destructuring
const [premierFruit3, deuxiemeFruit3, ...autresFruits] = fruits;
console.log('DESTRUCTURINGREST ->', autresFruits);



// Objects
const utilisateur = {
    nom: 'Gavin',
    vieuxDe: 30,
    ville: 'Namur'
};

// Destructuring basique
const {ville, nom, vieuxDe} = utilisateur;
console.log('DESTRUCTURINGOBJECT ->', ville)
console.log('DESTRUCTURINGOBJECT ->', vieuxDe)
console.log('DESTRUCTURINGOBJECT ->', nom)

// Renommer les variables pendant le destructuring
const { nom: nomFamille, vieuxDe: age} = utilisateur;
console.log('DESTRUCTURINGRENAMING ->', nomFamille)
console.log('DESTRUCTURINGRENAMING ->', age)

// Dans le cas ou la cle n'existe pas, on peut donner une valeur par defaut
const { nom: prenom, numero = 'Non spÃ©cifiÃ©'} = utilisateur;
console.log('DESTRUCTURINGOBJECTDEFAULT ->', numero);

// Destructuring d'objects imbriques
const utilisateur2 = {
    name: 'Alexandre',
    address: {
        city: 'Namur',
        zipCode: 5000
    }
}

const { name, address: {city, zipCode} } = utilisateur2;
console.log('DESTRUCTURINGIMBRIQUE ->', city)
console.log('DESTRUCTURINGIMBRIQUE ->', zipCode)


// Destructuring dans les parametres d'une fonction
const presenteToi = ({ ville, nom, vieuxDe}) => {
    console.log('DESTRUCTURINGFONCTION ->', `Bonjour, je suis ${nom}, j\'ai ${vieuxDe} ans et je suis de ${ville}`)
}

presenteToi(utilisateur)

// Spread operator (...)
const persons = [
    {
        id: 1,
        nom: 'Marco Polo',
        alive: false
    },
    {
        id: 2,
        nom: 'Luke skywalker',
        alive: false
    },
    {
        id: 3,
        nom: 'Shadowheart',
        alive: true
    }
];

const [person1, person2, person3] = persons;
console.log(person1)
console.log(person2)
console.log(person3)

const { id: idP1, nom: nomP1 } = person1;
console.log(idP1, nomP1)

const allPersonsAlive = persons.map(person => {
    if (!person.alive) {
        return {...person, alive: true}
    }
    return person
})

console.log(allPersonsAlive)

const legumes = ['Tomate', 'Courgette', 'Carotte'];

// Creation de copie d'un array avec le spread
const copieLegumes = [...legumes];
console.log(copieLegumes)

// Concatenation
const fruitsLegumes = [...fruits, ...legumes];
console.log(fruitsLegumes)

// Concatenation de valeurs primitives et d'un tableau
const fruitsPlusLegumes = ['Pomme', ...legumes, 'Banane', 'Melon'];
console.log(fruitsPlusLegumes)