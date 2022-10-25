// función sin parámetros que devuelve siempre true

function verdad(){
    return true
}

verdad();

// función asíncrona

async function promesa(){
return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}
promesa()

// función generadora

function* generaPares(){
let indice = 0;

while (true){
indice += 2;
yield indice
}

}

const pares = generaPares();

console.log(pares.next().value);