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

// créer un objet a partir d'un tableau
const entries = [
    ['name', 'Toto2'],
    ['age', 30],
    ['job', 'Chauffeur']
]
const obj2 = Object.fromEntries(entries)
console.log(obj2)

// Récuperer les clés
console.log(Object.keys(obj))

// Récuperer les vleurs
console.log(Object.values(obj))

