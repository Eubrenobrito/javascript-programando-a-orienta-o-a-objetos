class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    // #saldo = 0;
    _saldo = 0
    sacar(valor){
        if(this._saldo >= valor){
        this._saldo -= valor;
        }
    }
    depositar(valor){
        if(valor > 0){
            this._saldo5 += valor;
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

contaCorrenteBreno.depositar(100);
contaCorrenteBreno.sacar(50);

console.log(contaCorrenteBreno);