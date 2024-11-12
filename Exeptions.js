// Exceptions //

const checkAge = (age) => {
    if (age < 18) {
        throw new Error('La vente d\'alcool est interdite aux mineurs.')
    } else if (typeof age !== 'number') {
        throw new TypeError("L'age doit etre un nombre")
    }

    console.log('AccÃ¨s Ã  la vente autorisÃ©.');
}

try {
    checkAge(15)
} catch (err) {
    console.error(`Erreur recuperee : ${err}`)
} finally {
    console.log("Ok, les verifications sont terminees.")
}

try {
    checkAge('Vingt')
} catch (err) {
    console.error(`Erreur rÃ©cupÃ©rÃ©e : ${err}`)
}

try {
    checkAge(25)
} catch (e) {
    console.error(`Erreur recuperee : ${e}`)
} finally {
    console.log("Ok, les verifications sont terminees")
}


// Exemple concret

const guessNumber = (secret) => {
    let attempts = 3;

    const askUser = () => {
        try {
            let response = parseInt(prompt('Devinez le nombre :'));

            if (isNaN(response)) {
                throw new TypeError("Vous devez entrer un nombre");
            }

            if (response === secret) {
                console.log("Felicitations, vous avez gagne : ", response)
            }

            attempts--;
            console.log(`Mauvaise reponse, il vous reste ${attempts} tentative(s)`)

            if (attempts > 0) {
                askUser()
            } else {
                console.log("Vous avez perdu")
            }

        } catch (error) {
            console.log(error instanceof Error)
            console.error(error.message)
            askUser()
        } finally {
            console.log('Partie terminee.')
        }
    };
    askUser()
};

guessNumber(42)