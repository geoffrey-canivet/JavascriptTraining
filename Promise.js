// Promise //

const simulationChargement = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 4000) {
                resolve('(fullfil -> chargement terminé avec succes')
            } else {
                reject('reject -> requete a pris trop de temps ')
            }
        }, time)
    })
}

console.log('requete debut')
simulationChargement(5000)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('requete fin'))
console.log('fin')