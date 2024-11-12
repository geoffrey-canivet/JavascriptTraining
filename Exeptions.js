// Exeptions //

function retirerArgent(montant) {
    const solde = 1000; // Solde initial du compte

    try {
        // Vérification du type de montant
        if (typeof montant !== 'number') {
            throw new Error("Le montant doit être un nombre.");
        }

        // Vérification du montant suffisant
        if (montant > solde) {
            throw new Error("Fonds insuffisants pour effectuer ce retrait.");
        }

        // Si tout est en ordre, effectuer le retrait
        console.log(`Retrait de ${montant} € effectué. Nouveau solde : ${solde - montant} €`);
    } catch (error) {
        // En cas d'erreur, afficher le message de l'erreur
        console.error("Erreur :", error.message);
    } finally {
        // Code dans le bloc finally qui s'exécute dans tous les cas
        console.log("Merci d'avoir utilisé notre service bancaire.");
    }
}

// Test du code
retirerArgent(200);    // Cas normal
retirerArgent(1500);   // Cas de fonds insuffisants
retirerArgent("500");  // Cas de type incorrect
