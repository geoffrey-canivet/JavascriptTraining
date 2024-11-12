// Deconsturing //

// TABLEAUX
// Destructuring de base
const voiture = ['voiture1', 'voiture2', 'voiture3', 'voiture4', 'voiture5'];
const [voiture1, voiture2, voiture3] = voiture;
console.log(voiture1);
console.log(voiture2);
console.log(voiture3);

// Sauter un index
const fruits = ['pomme', 'bananne', 'orange', 'poire', 'mangue'];
const [fruit1, fruit2, , autreFruit] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(autreFruit);

// Valeur par défaut // si index n'existe pas
const [fruit3, fruit4, fruit5 = 'mangue'] = fruits;
console.log(fruit3);
console.log(fruit4);
console.log(fruit5);

// rest operator
const [fruit6, ...autresFruits] = fruits;
console.log(fruit6);
console.log(autresFruits);

// OBJETS
const personne = {
    nom: 'Geoffrey',
    prenom: 'Reader',
    age: 20
};

// Destructuring basique
const { nom, prenom } = personne;
console.log(nom);
console.log(prenom);

// Renomer variable pendant destructuring
const { nom: prenom2, prenom: nom2 } = personne;
console.log(nom2);
console.log(prenom2);

// Valeur par défaut si clé n'existe pas, sinon est ecrasé par valeur
const { age: age2 = 18 } = personne;
console.log(age2);


// Destructuring objet imbriqué
const personne22 = {
    nom: 'Geoffrey',
    prenom: 'Reader',
    age: 20,
    adresse: {
        ville: 'Paris',
        codePostal: 75000
    }
};
const { adresse: { ville, codePostal } } = personne22;
console.log(ville);
console.log(codePostal);

// destructuring dans les parametre d'une fonction
const afficherPersonne = ({ nom, prenom, age }) => {
    console.log(`${nom} ${prenom} ${age}`);
}
afficherPersonne(personne);

// Spread operator
const users = [
    { id: 1, nom: 'Geoffrey', prenom: 'Reader', age: 20, alives: true },
    { id: 2, nom: 'Jacques', prenom: 'Reader', age: 20, alives: true },
    { id: 3, nom: 'Louis', prenom: 'Reader', age: 20, alives: true },
    { id: 4, nom: 'Jean', prenom: 'Reader', age: 20, alives: true }
];

const [user1, user2] = users;
console.log(user1);
console.log(user2);
const [user3, user4, ...autresUsers] = users;
console.log(user3);
console.log(user4);
console.log(autresUsers);