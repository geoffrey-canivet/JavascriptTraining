/*
Gestion de bibliothèque

Livres La bibliothèque possède un catalogue initial de 5 livres, stockés dans un tableau d'objets avec les propriétés suivantes :

id: Identifiant unique du livre
titre : Titre du livre
auteur : Nom de l'auteur
categorie : Catégorie du livre (ex: Classique, Science-fiction, etc.)
disponible : Statut de disponibilité du livre (booléen)
Emprunteurs Le système gère une liste d'emprunteurs, stockée dans un tableau d'objets avec les propriétés suivantes :

    userId : Identifiant unique de l'emprunteur
nom : Nom de l'emprunteur
borrowedBooks : Tableau contenant les IDs des livres empruntés
Fonctionnalités

Emprunt de livre (borrowBook)
Prend en paramètres l'ID de l'utilisateur et l'ID du livre
Vérifie la disponibilité du livre
Met à jour le statut du livre et la liste des emprunts de l'utilisateur
Affiche un message de confirmation ou d'erreur approprié
Retour de livre (returnBook)
Prend en paramètres l'ID de l'utilisateur et l'ID du livre
Met à jour le statut du livre et la liste des emprunts de l'utilisateur
Affiche un message de confirmation
Recherche de livres (searchBooks)
Prend en paramètre un critère de recherche
Recherche dans les titres, auteurs et catégories (insensible à la casse)
Affiche les résultats trouvés ou un message si aucun livre ne correspond
Liste des emprunts (listBorrowedBooks)
Prend en paramètre l'ID de l'utilisateur
Affiche la liste des livres empruntés par cet utilisateur
Affiche un message approprié si l'utilisateur n'a aucun emprunt
Statistiques de la bibliothèque (getLibraryStats)
Calcule et affiche :
    Le nombre total de livres
Le nombre de livres disponibles
Le nombre de livres empruntés
Contraintes

Utiliser les méthodes de manipulation de tableaux (find, filter, etc.)
Gérer les cas d'erreur (livre non trouvé, livre déjà emprunté, etc.)
Ne pas modifier la structure des données initiales
Maintenir la cohérence des données entre les livres et les emprunts
Pour valider votre implémentation, vérifiez les fonctions comme suit :

    Plusieurs emprunts de livres par différents utilisateurs
Retour d'un livre
Recherche d'un livre spécifique
Vérification des emprunts de chaque utilisateur
Affichage des statistiques générales*/

const livres = [
    {
        id: 1,
        titre: "Tire livre 1",
        auteur: "Auteur1",
        categorie: "Science-fiction",
        disponible: true
    },
    {
        id: 2,
        titre: "Tire livre 2",
        auteur: "Auteur2",
        categorie: "Classique",
        disponible: true
    },
    {
        id: 3,
        titre: "Tire livre 3",
        auteur: "Auteur3",
        categorie: "policier",
        disponible: true
    },
    {
        id: 4,
        titre: "Tire livre 4",
        auteur: "Horreur",
        categorie: "Science-fiction",
        disponible: true
    },
    {
        id: 5,
        titre: "Tire livre 5",
        auteur: "Aventure",
        categorie: "Science-fiction",
        disponible: true
    },
]

const users = [
    {
        userId: 1,
        nom: "User1",
        borrowedBooks: []
    },
    {
        userId: 2,
        nom: "User2",
        borrowedBooks: []
    },
    {
        userId: 3,
        nom: "User3",
        borrowedBooks: []
    },
    {
        userId: 4,
        nom: "User4",
        borrowedBooks: []
    }
]

// EMPRUNTER UN LIVRE
const borrowBook = (userId, livreId) => {
    if (livres.find(livre => livre.id === livreId).disponible === false) {
        return console.log("Le livre n'est pas disponible")
    } else {
        users.find(user => user.userId === userId).borrowedBooks.push(livreId)
        livres.find(livre => livre.id === livreId).disponible = false
        console.log("Livre emprunté avec succes")
    }
}

// RENDRE UN LIVRE
const returnBook = (userId, livreId) => {
    livres.find(livre => livre.id === livreId).disponible = true
    let user = users.find(user => user.userId === userId)
    let livreASupprimer = user.borrowedBooks.findIndex(livre => livre === livreId)
    user.borrowedBooks.splice(livreASupprimer, 1)
    console.log("Livre rendu avec succes")
}

// RECHERCHER UN LIVRE
const searchBook = (critere) => {
    if (livres.find(livre => livre.titre.toLowerCase() === critere.toLowerCase()) ||
        livres.find(livre => livre.auteur.toLowerCase() === critere.toLowerCase()) ||
        livres.find(livre => livre.categorie.toLowerCase() === critere.toLowerCase()))
    {
        console.log("Le livre existe")
    } else {
        console.log("Le livre n'existe pas")
    }
}

// LISTE DES EMPRUNT
const listBorrowedBooks = (userId) => {
    const user = users.find(user => user.userId === userId)
    if (user.borrowedBooks.length === 0) {
        console.log("L'utilisateur n'a emprunté aucun livre")
    } else {
        let listeLivres = []
        user.borrowedBooks.forEach(livre => {
            listeLivres.push(livre)
        })
        console.log(`L'utilisateur a emprunté ${user.borrowedBooks.length} livre(s) (id livre: ${listeLivres})`)
    }
}

// STATS DE LA LIBRAIRIE
const getLibraryStats = () => {
    const livreDispo = livres.filter(livre => livre.disponible === true).length
    const livreEmprunt = livres.filter(livre => livre.disponible === false).length
    const livreTotal = livres.length
    console.log(`Nombre total de livres: ${livreTotal}`)
    console.log(`Livres disponibles: ${livreDispo}`)
    console.log(`Livres loué: ${livreEmprunt}`)
}

// Afficher tout les utilisateurs et livres
const afficheUsersLivres = () => {
    console.log("========= Utilisateurs =========");
    users.forEach(user => {
        console.log(`🧑 Nom: ${user.nom} | ID: ${user.userId} | Emprunts: ${user.borrowedBooks.join(', ') || "Aucun"}`);
    });

    console.log("========= Livres =========");
    livres.forEach(livre => {
        console.log(`📘 Titre: ${livre.titre} | Auteur: ${livre.auteur} | Catégorie: ${livre.categorie} | Disponible: ${livre.disponible ? "Oui" : "Non"}`);
    });
    console.log("================================");
};
// Rechercher
searchBook("hoRReur")
// Louer
borrowBook(1, 1)
borrowBook(1, 2)
borrowBook(1, 3)
borrowBook(2, 4)
borrowBook(3, 4) // Livre indispo
afficheUsersLivres()
// Rendre
returnBook(1, 1)
// Livre loué par un utilisateur
listBorrowedBooks(1)
// Stat de la librairie
getLibraryStats()
