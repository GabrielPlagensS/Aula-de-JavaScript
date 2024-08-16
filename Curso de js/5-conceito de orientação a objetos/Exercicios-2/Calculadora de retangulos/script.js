class Retangulo {
    constructor(largura, altura) {
      if (typeof largura !== 'number' || typeof altura !== 'number' || largura <= 0 || altura <= 0) {
        throw new Error("Largura e altura devem ser números maiores que zero.");
      }
  
      this.largura = largura;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.largura * this.altura;
    }
  
    calcularPerimetro() {
      return 2 * (this.largura + this.altura);
    }
  }
  
const retangulo = new Retangulo(5, 10);
console.log("Área do retângulo:", retangulo.calcularArea()); 
console.log("Perímetro do retângulo:", retangulo.calcularPerimetro()); 
  