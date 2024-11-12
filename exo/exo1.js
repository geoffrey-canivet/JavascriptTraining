/*
Exercice 1 :
Créez un script qui calcule le montant total à payer dans un restaurant en incluant le pourboire.

Demander à l'utilisateur de saisir le coût du repas (ce montant peut contenir des décimales)
Demander à l'utilisateur de choisir un pourcentage de pourboire parmi trois options :
15%
20%
25%
Calculer le montant total à payer en ajoutant le pourboire au coût du repas
Afficher le résultat selon les conditions suivantes :
Si l'utilisateur a choisi 15%, 20% ou 25% : afficher le montant total à payer
Pour tout autre pourcentage : afficher un message d'erreur*/


let prixRepas = prompt("Cout du repas");
let pourCents = prompt("Pourcentage de pourboire");

prixRepas = parseFloat(prixRepas);
pourCents = parseInt(pourCents);

switch (pourCents) {
    case 15:
    case 20:
    case 25:
        let total = prixRepas + (prixRepas * pourCents / 100);
        alert("Total à payer : " + total.toFixed(2));
        break;
    default:
        alert("Erreur : pourcentage non valide (15, 20, 25 acceptés)");
        break;
}



