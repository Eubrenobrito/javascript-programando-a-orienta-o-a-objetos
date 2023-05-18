import { Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente();

 cliente1.nome = 'Breno';
 cliente1.cpf = 1022219552265;

const cliente2 = new Cliente();
 cliente2.nome = 'jurubeba';
 cliente2.cpf = 1033319552265;

const contaCorrenteBreno = new ContaCorrente();

contaCorrenteBreno._saldo = 0;
contaCorrenteBreno.agencia = 1001;

contaCorrenteBreno.depositar(100);
contaCorrenteBreno.depositar(200);
contaCorrenteBreno.depositar(200);
contaCorrenteBreno.depositar(200);
contaCorrenteBreno.depositar(200);

contaCorrenteBreno.sacar(50);

console.log(contaCorrenteBreno);