const reg = /\w+:(Matheus|João|Maria)/; //nome: nadsuasudi

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Maria"));