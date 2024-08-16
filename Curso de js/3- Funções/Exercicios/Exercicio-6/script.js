function verificar(dado){
    if(typeof dado === "string"){
        console.log("Este dado e uma string");
    }else if(typeof dado === "number"){
        console.log("Este dado e um number");
    } else if(typeof dado === "boolean"){
        console.log("Este dado e um boolean");
    }
}

verificar(true);
verificar(23);
verificar("teste")