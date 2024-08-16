let novoElemento = documento.creatElement("p");
let texto = document.createTextNode("Algum texto");

novoElemento.appendchild(texto);

let p = document.queryselector("#paragrafo-principal");
let pai = p.parentNode;

pai.appendchild(novoElemento);