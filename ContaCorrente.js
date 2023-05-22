import {Cliente} from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas= 0
    agencia;
    _cliente;
    _saldo = 0;

    set cliente(novoValor) {
        //verificando se o novo valor é do tipo "new cliente" (nova instancia)
        if (novoValor instanceof Cliente) {
           this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }


    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if (valor > 0) return
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}