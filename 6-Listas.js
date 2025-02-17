console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio De Janeiro`;


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);
console.log("Destinos possíveis: ");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.push(`Ceará`);

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);