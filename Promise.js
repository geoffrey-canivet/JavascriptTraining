// Promise //

// La fonction simulateLoading rÃ©cupÃ¨re une durÃ©e en millisecondes en paramÃ¨tre

// const simulateLoading = (time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time < 5000) {
//                 resolve('Chargement des donnÃ©es terminÃ© avec succÃ¨s')
//             } else {
//                 reject('La requÃªte Ã  prit trop de temps')
//             }
//         }, time)
//     })
// }
//
// console.log("DÃ©but de la requÃªte...");
//
// simulateLoading(4000)
//     .then(message => {
//         console.log(message);
//     })
//     .catch(error => {
//         console.error(error)
//     })
//     .finally(() => {
//         console.log("La requÃªte est terminÃ©e.")
//     })
//
// Chaining de Promise
const getUser = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: id,
                nom: 'Balthazar'
            })
        },1000)
    })
};

const getOrders = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    product: 'Tractor'
                },
                {
                    id: 2,
                    product: 'Wheat grains'
                }
            ])
        }, 2000)
    })
};

const calculateTotal = (order) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const total = order.length * 100
            resolve(total);
        }, 1000)
    })
};

getUser(1)
    .then(user => {
        console.table(user);
        return getOrders(user);
    })
    .then(order => {
        console.table(order)
        return calculateTotal(order)
    })
    .then(total => {
        console.log(`Total : ${total}`)
    })
    .catch(error => {
        console.error('Une erreur est survenue pendant la requete :', error)
    })