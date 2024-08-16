let validarNomeUsuario = /^(?={3,16}$)[a-z0-9_]/;

console.log(validarNomeUsuario.test("matheus_123"));

console.log(validarNomeUsuario.test("as"));
console.log(validarNomeUsuario.test("11111111111111"));