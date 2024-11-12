/*
Exercice 2 :
Créez un script de gestion de rendez-vous qui permet à l'utilisateur d'effectuer les opérations suivantes via un menu interactif :

Un tableau qui contient trois rendez-vous.
Le programme doit afficher un menu avec les options suivantes :

Ajouter un rendez-vous
Supprimer un rendez-vous
Afficher la liste des rendez-vous
Quitter

Selon le choix de l'utilisateur, le programme doit :
Pour l'option 1 : Demander à l'utilisateur d'entrer un nouveau rendez-vous et l'ajouter à la liste
Pour l'option 2 : Demander l'index du rendez-vous à supprimer et le retirer de la liste s'il est valide
Pour l'option 3 : Afficher tous les rendez-vous de la liste
Pour l'option 4 : Afficher un message d'au revoir et terminer le programme
*/

let rdv = ["Lundi", "Mardi", "Mercredi"]

let menu = +prompt('Que voulez vous faire ?\n 1: Nouveau rdv\n 2: Supprimer rdv\n 3: Afficher rdv\n 4: Quitter\n')

switch (menu) {
    case 1:
        let newRdv = prompt('Choisissez un jour de rdv')
        rdv.push(newRdv)
        console.log(rdv)
        break
    case 2:
        let index = +prompt('Choisissez un index')
        if (index >= 0 && index < rdv.length) {
            rdv.splice(index, 1)
        }
        console.log(rdv)
        break
    case 3:
        for (let i = 0; i < rdv.length; i++) {
            console.log(rdv[i])
        }
        break
    case 4:
        alert('Au revoir')
        break
    default: "Erreur"
}