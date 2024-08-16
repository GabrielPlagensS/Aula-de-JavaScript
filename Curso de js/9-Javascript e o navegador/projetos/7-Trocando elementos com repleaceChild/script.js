let novoElemento = documento.creatElement("p");
let texto = document.createTextNode("Algum texto");

novoElemento.appendchild(texto);

let heading = document.queryselector("#titulo-principal");
let paiHeading = heading.parentNode;

paiHeading.repleaceChild(novoElemento,heading);