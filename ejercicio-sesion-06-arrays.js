const comprar = ["manteca", "harina", "leche", "café", "fideos"];

comprar.push("aceite de girasol");

comprar.pop();


const peliculas = [
    { titulo: "Bohemian Rhapsody", director: "Bryan Singer", fecha: 2018 },
    { titulo: "Kill Bill", director: "Quentin Tarantino", fecha: 2003 },
    { titulo: "El laberinto del fauno", director: "Guillermo del Toro", fecha: 2007}
];

const posteriores2010 = peliculas.filter(peli => peli.fecha > 2010);

const directores = peliculas.map(pelicula => {
    return {
        director: pelicula.director
    }
});

const titulos = peliculas.map(pelicula => {
    return {
        titulo: pelicula.titulo
    }
});

const titus_dires = directores.concat(titulos);


const conPropagacion = [...directores, ...titulos];
