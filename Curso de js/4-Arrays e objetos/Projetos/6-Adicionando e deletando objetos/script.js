let carro = {
  portas: 4,
  bancos: 5,
  farois: 4
}
console.log(carro.bancos);

delete carro.bancos;

console.log(carro.bancos);

console.log(carro);

carro.volante = true;

console.log(carro.volante);