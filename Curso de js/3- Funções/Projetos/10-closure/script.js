function lembrarSoma(x){
    return function(y){
        return x + y;
    }
}

let soma1 = lembrarSoma(2);

console.log(soma1(5));

let soma2 = lembrarSoma(7)

console.log(soma2(7));

function contador(i){
    let cont = i;
    let somaContador = function(){
        console.log(cont);
        cont++;
    }
    return somaContador;
}

let meuContador = contador(5);
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();

let meuContador2 = contador(1)
meuContador2();
meuContador2();
meuContador2();
meuContador2();
meuContador2();

