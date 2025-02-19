console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis: \n");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18||
                    estaAcompanhada 
                    == true;

let contador = 0;
let destinoExiste = false;

while(contador<listaDeDestinos.length){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log("Destino existe: " + destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Desculpe, hou um erro!");
}

for(let i = 0; i < 3; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
    }
}