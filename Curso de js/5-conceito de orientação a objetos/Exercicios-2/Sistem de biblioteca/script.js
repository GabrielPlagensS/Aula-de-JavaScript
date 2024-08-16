class Livro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
      this.disponivel = true; 
    }
  
    emprestar() {
      if (this.disponivel) {
        this.disponivel = false;
        return true; 
      } else {
        return false; 
      }
    }
  
    devolver() {
      if (!this.disponivel) {
        this.disponivel = true;
        return true; 
      } else {
        return false;
      }
    }
  
    consultarDisponibilidade() {
      return this.disponivel;
    }
}
  
const meuLivro = new Livro("Dom Quixote", "Miguel de Cervantes");
console.log("Disponibilidade do livro:", meuLivro.consultarDisponibilidade());
  
const emprestado = meuLivro.emprestar();
  if (emprestado) {
    console.log("Livro emprestado com sucesso.");
  } else {
    console.log("O livro não está disponível para empréstimo.");
  }
  
console.log("Disponibilidade do livro após empréstimo:", meuLivro.consultarDisponibilidade()); 
  
const devolvido = meuLivro.devolver();
if (devolvido) {
    console.log("Livro devolvido com sucesso.");
} else {
    console.log("O livro já estava disponível.");
}
  
console.log("Disponibilidade do livro após devolução:", meuLivro.consultarDisponibilidade()); 
  