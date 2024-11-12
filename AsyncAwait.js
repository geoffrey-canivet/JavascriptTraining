// Async - await //

const waiting = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

// Si declaration de fonction via mot clÃ© function -> async doit etre avant le mot clÃ©
// async function test() {}

// Si declaration par fonction flechee -> async doit etre devant les () de parametres de la fonction
const sayHello = async (nom) => {
    await waiting(2000)
    return `Bonjour ${nom}`
}

const divide = async (a, b) => {
    if (b === 0) {
        throw new Error('Division par zero impossible')
    }

    await waiting(2000);
    return a / b;
}

const getUserDatas = async (id) => {
    await waiting(1000);
    const user = {id, nom: 'Aude'};
    await waiting(2000);
    const order = [
        {id: 1, product: 'Book'},
        {id: 2, product: 'Drawing pencil'}
    ]
    return { user, order };
}

const mainFunction = async () => {
    try {
        const message = await sayHello('Anne-Lise')
        console.log(message)

        const result = await divide(10,2);
        console.log(result);

        const result2 = await divide(5,0)
        console.log(result2)
    } catch (err) {
        console.error(err)
    }

    const { user, order } = await getUserDatas(1)
    console.table(user);
    console.table(order);
}

mainFunction()

// Exemple concret

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");

        console.log(response);
        console.log(typeof response);

        const data = await response.json();
        console.table(data);

    } catch (e) {
        console.error(e)
    }
}

getPosts()