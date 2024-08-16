const pessoa ={
    maos:2,
}

const pessoaNova = object.create(pessoa);

console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty('maos'));

console.log(object.getPrototypeOf(pessoaNova) === pessoa);
