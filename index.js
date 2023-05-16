class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){;
        this.saldo.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();

 cliente1.nome = 'Breno';
 cliente1.cpf = 022219552265;

const cliente2 = new Cliente();
 cliente2.nome = 'jurubeba';
 cliente2.cpf = 033319552265;

const contaCorrenteBreno = new ContaCorrente();
contaCorrenteBreno.saldo = 0;
contaCorrenteBreno.agencia = 1001;
console.log(contaCorrenteBreno.saldo)
contaCorrenteBreno.saldo = 200;
console.log(contaCorrenteBreno.saldo)



console.log(cliente1);
console.log(cliente2);