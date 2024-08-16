class ContaBancaria {
    constructor(numeroConta, saldo = 0) {
      this.numeroConta = numeroConta;
      this.saldo = saldo;
    }
  
    depositar(valor) {
      if (typeof valor !== 'number' || valor <= 0) {
        throw new Error("O valor depositado deve ser um número positivo maior que zero.");
      }
  
      this.saldo += valor;
    }
  
    sacar(valor) {
      if (typeof valor !== 'number' || valor <= 0) {
        throw new Error("O valor do saque deve ser um número positivo maior que zero.");
      }
  
      if (this.saldo >= valor) {
        this.saldo -= valor;
      } else {
        throw new Error("Saldo insuficiente para realizar o saque.");
      }
    }
  
    consultarSaldo() {
      return this.saldo;
    }
  }
  
  const minhaConta = new ContaBancaria("12345", 1000);
  console.log("Saldo atual:", minhaConta.consultarSaldo()); 
  
  minhaConta.depositar(500);
  console.log("Saldo após depósito:", minhaConta.consultarSaldo()); 
  
  minhaConta.sacar(800);
  console.log("Saldo após saque:", minhaConta.consultarSaldo()); 
  