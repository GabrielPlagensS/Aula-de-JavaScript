const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("123 as"));
console.log("asdadsdasdasdasfsaffsdfosdjfosdfçzllkz");

const az = /[a-z]/;

console.log(nottoaz.test("sddsakhasdnh323"));