function faixaEtaria(idade) {
    
    if(idade < 12) {
        return "Criança"
    } else if(idade >= 12 && idade <= 24) {
        return "Jovem"
    } else {
        return "Adulto"
    }
    
}

const crianca = faixaEtaria(10)
const pessoa = faixaEtaria(20)
const adulto = faixaEtaria(34)

console.log(crianca);
console.log(adulto);
console.log(pessoa);