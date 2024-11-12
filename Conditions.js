// condition //

const a = 5
const b = 10

// if..else
if (a > b) {
    console.log(`${a} est plus grand que ${b}`)
} else if (a < b){
    console.log(`${a} est plus petit que ${b}`)
} else {
    console.log('error')
}

// Ternaire
console.log(a > b ? `${a} est plus grand que ${b}` : `${a} est plus petit que ${b}`)

// switch
switch (a) {
    case 1:
        console.log('1')
        break
    case 2:
        console.log('2')
        break
    case 5:
    case 6: console.log('5 ou 6')
    default:
        console.log('error')
}