import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
    cliente1.nome = "Ricardo";
    cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
    cliente2.nome = "Alice";
    cliente2.cpf = 44455566609;

const ContaCorrenteRicardo = new ContaCorrente();
    ContaCorrenteRicardo.agencia = 1001;
    ContaCorrenteRicardo.depositar(100);
    ContaCorrenteRicardo.depositar(200);

const valorSacado = ContaCorrenteRicardo.sacar(200);
console.log(valorSacado)