// Dates //

// Récupération de la date du jour
const today = new Date();
console.log(today);

// Récupérer jour
console.log(today.getDate());

// Récupérer le mois
console.log(today.getMonth()+1);

// Récupérer année
console.log(today.getFullYear());

// Récupération des temps de la date
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

// Format de la date
console.log(today.toLocaleDateString('fr-FR'));
console.log(today.toLocaleTimeString('fr-FR'));
console.log(today.toLocaleString('fr-FR'));

const date = new Date();
console.log(date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}));
