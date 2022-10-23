const datosPersonales = [{ nombre: "Hebe", apellido: "Leiva", edad: 47, altura: 1.6, eresDesarrollador: true }];

const miEdad = datosPersonales.edad

const datosVale = [{ nombre: "Valeria", apellido: "Espagnol", edad: 48,  altura: 1.68, eresDesarrollador: false }];

const datosTere = [{ nombre: "Teresita", apellido: "Serra", edad: 49, altura: 1.69, eresDesarrollador: false }];


const datosTodas = [...datosPersonales, ...datosTere, ...datosVale];

const datosOrdenados = datosTodas.sort((a, b) => a.edad - b.edad);
