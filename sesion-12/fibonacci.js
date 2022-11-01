function fibonacci(numero){
    let numeros=[0,1];
    for (let i = 2; i < numero; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
        console.log(numeros)
    }
    return numeros;
}

console.log(fibonacci(6))