class Conta{
    constructor(saldocc, sladocp, juros){
        this.saldocc = saldocc;
        this.saldocp = saldocp;
        this.juros = juros;
    }

    deposito(valor){
        this.saldocc += valor;
    }

    saque(valor){
        this.saldocc -= valor;
    }

    transferenciacp(valor){
        this.saldocc -= valor;
        this.saldocp += valor;
    }

    transferenciacc(valor){
        this.saldocp -= valor;
        this.saldocc += valor;
    }

    jurosDeAniversario(){
        let juros = (this.saldocp * this.juros) / 100;
        this.saldocp += juros;
    }
}

class ContaEspecial extends Conta{
    constructor(saldoCC, saldoCP, juros){
        super(saldoCC, saldoCP, juros*2)
    }
}

let conta = new Conta(1000, 5000, 1);

console.log(conta);

conta.saque(500);

console.log(conta);

conta.deposito(5000);

console.log(conta);

conta.transferenciacp(3000);

console.log(conta);

conta.jurosDeAniversario();

console.log(conta);

let conta2 = new ContaEspecial(10000, 5000, 1);

console.log(conta2);

conta2.saque(5000);

conta2.jurosDeAniversario();

console.log(conta2);