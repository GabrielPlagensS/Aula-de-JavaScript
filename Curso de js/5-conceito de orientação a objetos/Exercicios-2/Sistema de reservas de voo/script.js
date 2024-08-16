class Voo {
    constructor(codigoVoo, origem, destino, assentosDisponiveis) {
      this.codigoVoo = codigoVoo;
      this.origem = origem;
      this.destino = destino;
      this.assentosDisponiveis = assentosDisponiveis;
    }
  
    reservarAssento() {
      if (this.assentosDisponiveis > 0) {
        this.assentosDisponiveis--;
        return true; 
      } else {
        return false; 
      }
    }
  
    consultarAssentosDisponiveis() {
      return this.assentosDisponiveis;
    }
  }
  
  const meuVoo = new Voo("123ABC", "São Paulo", "Rio de Janeiro", 50);
  console.log("Assentos disponíveis:", meuVoo.consultarAssentosDisponiveis());
  
  const reservaFeita = meuVoo.reservarAssento();
  if (reservaFeita) {
    console.log("Reserva efetuada com sucesso.");
  } else {
    console.log("Não há mais assentos disponíveis.");
  }
  
console.log("Assentos disponíveis após reserva:", meuVoo.consultarAssentosDisponiveis());
  