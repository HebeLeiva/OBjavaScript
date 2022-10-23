const hoy = new Date();

const nacimiento = new Date(1973, 3, 17);

const masTarde = hoy.getTime() > nacimiento.getTime();

const dia = nacimiento.getDate();

const mes = nacimiento.getMonth() + 1;

const año = nacimiento.getFullYear();



