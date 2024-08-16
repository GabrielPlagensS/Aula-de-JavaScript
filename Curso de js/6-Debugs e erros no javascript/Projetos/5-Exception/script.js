function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error("o parâmetro nome precisa se string");
    } else {
        console.log(`olá ${nome}.`);
    }
}

saudacao("Mathues");
saudacao(5);

console.log("teste");