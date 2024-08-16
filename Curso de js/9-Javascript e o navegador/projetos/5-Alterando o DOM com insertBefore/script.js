let novoElemento = documento.creatElement("p");
let texto = document.createTextNode("Algum texto");

novoElemento.appendchild(texto);

let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);