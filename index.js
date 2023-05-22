import { Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente( 'Breno', 1022219552265);
const cliente2 = new Cliente('jurubeba',1033319552265 );

const contaCorrenteBreno = new ContaCorrente( 1001, cliente1);
//pra toda vez que eu tiver um new ContaCorrente vai incrementar na variavel numeroDeContas
contaCorrenteBreno.depositar(500);
const conta2 = new ContaCorrente(1022, cliente2 );

// let valor= 200;
// contaCorrenteBreno.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);