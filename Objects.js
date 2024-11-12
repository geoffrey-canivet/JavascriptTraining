// OBJET //

let obj = {
    name: 'Toto',
    age: 20,
    job: 'Programmer',
    direBonjour: function(name) {
        console.log(`Bonjour ${name}`)
    }
}
obj.direBonjour(obj.name)

// Ajouter une propriété a l'objet
obj.isMaried = false
console.log(obj.isMaried)

// supprimer une clé
console.log(delete obj.job)

// Afficher valeur d'une clé
console.log(obj.age)
console.log(obj["age"])

// Declarer un object a partir d'entrees de tableau
const entries = [
    ["name", "Pin"],
    ["age", 23],
    ["city", "Charleroi"],
];

const obj2 = Object.fromEntries(entries);
console.log("FROMENTRIES ->", obj2); // Resultat : {name: "Pin", age: 23, city: "Charleroi"}

// Recuperation des keys d'un object
const keys = Object.keys(obj2);
console.log("KEYS ->", keys); // Resultat : ["name", "age", "city"]

// Recuperation des values d'un object
const values = Object.values(obj2);
console.log("VALUES ->", values); // Resultat : ["Pin", 23, "Charleroi"]

