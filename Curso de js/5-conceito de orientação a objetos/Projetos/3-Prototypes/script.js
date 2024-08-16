const pessoa = {
    maos: 2,
}

console.log(object.getPrototypeOf(pessoa));
console.log(object.getPrototypeOf(pessoa) === object.getPrototype);

console.log(pessoa.hasOwnPrototype('maos'));