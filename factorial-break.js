var numero = 10;
var resultado = numero;
var i = 1;
while (i < numero) {
    resultado = resultado * i;
    i++
    console.log(resultado);
    if (resultado > 100000){
        console.log("El número " + resultado + " es mayor a 100000");
        break;
    }
}