/*
Exercice 3 :
Créez un script qui calcule l'âge d'une personne et affiche sa date de naissance de manière formatée.

Demander à l'utilisateur de saisir sa date de naissance en trois parties :

Le jour de naissance
Le mois de naissance (en nombre de 1 à 12)
L'année de naissance

Calculer l'âge précis de la personne en :

1 Récupérant la date actuelle du système
2 Calculant la différence entre l'année actuelle et l'année de naissance
3 Ajustant l'âge si l'anniversaire de l'année en cours n'est pas encore passé

Gérer le cas particulier du mois de février en :

    Vérifiant si l'année de naissance était bissextile
Calculant le nombre correct de jours (28 ou 29)
Convertir le numéro du mois en son nom complet en français à l'aide d'une structure switch
    Afficher deux informations :
        La date de naissance complète au format "jour mois année"
        L'âge actuel de la personne*/




// date actuel
let date = new Date()
let currentDate = date.getDate()
let currentMonth = date.getMonth() + 1
let currentYear = date.getFullYear()
let now = `${ currentDate }/${ currentMonth }/${ currentYear}`

// date naissance
let jour = prompt("Jour de naissance :")
let mois = +prompt("Mois de naissance :")
let annee = prompt("Année de naissance :")

switch (mois) {
    case 1:
        mois = "Janvier"
        break;
    case 2:
        mois = "Février"
        break;
    case 3:
        mois = "Mars"
        break;
    case 4:
        mois = "Avril"
        break;
    case 5:
        mois = "Mai"
        break;
    case 6:
        mois = "Juin"
        break;
    case 7:
        mois = "Juillet"
        break;
    case 8:
        mois = "Aout"
        break;
    case 9:
        mois = "Septembre"
        break;
    case 10:
        mois = "Octobre"
        break;
    case 11:
        mois = "Novembre"
        break;
    case 12:
        mois = "Decembre"
        break;
    default:
        console.log("Erreur : mois invalide");
}



// result
if (annee % 4 == 0 && annee % 100 != 0 || annee % 400 == 0) {
    // bisextile
    console.log("année de naissance bisextile")
} else {
    console.log("année de naissance non bisextile")
}
let age = currentYear - annee
console.log(age)
console.log(`${ jour }/${ mois }/${ annee }`)








