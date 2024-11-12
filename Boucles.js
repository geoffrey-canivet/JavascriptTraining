// Boucles //

// While
let i = 0;
while (i < 10) {
    console.log(`while : ${i}`);
    i++;
}

// Do...while
let j = 0;
do {
    console.log(`do...while : ${j}`);
    j++;
} while (j < 10);

// For
for (let k = 0; k < 10; k++) {
    console.log(`for : ${k}`);
}

// For break/continue
for (let l = 0; l < 10; l++) {
    if (l === 5) {
        break;
    }
    if (l % 2 === 0) {
        continue;
    }
    console.log(`for break/continue : ${l}`);
}

// For tableau index
const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let m = 0; m < tableau.length; m++) {
    console.log(`for tableau : ${tableau[m]}`);
}

// For tableau valeur
for (let n in tableau) {
    console.log(`for tableau valeur : ${tableau[n]}`);
}

// For objet
const objet = {
    nom: "Geoffrey",
    prenom: "Reader",
    age: 20
};

for (const key in objet) {
    console.log(`for objet : ${key} = ${objet[key]}`);
}

for (let o in objet) {
    console.log(`for objet : ${objet[o]}`);
}

// Foreach
const tableau2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tableau2.forEach(function (element, index, tableau) {
    console.log(`foreach : ${element}`);
});