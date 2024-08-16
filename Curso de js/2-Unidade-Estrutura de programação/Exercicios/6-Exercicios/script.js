let nome = "Lucas";
let idade = 19;
const cnh = true;

if(cnh == true && idade >= 18){
    console.log("Pode dirigir");
}else if(idade >= 18 && cnh == false){
    console.log("Não pode dirigir, mas pode fazer a cnh");
}else{
    console.log("Não pode dirigir");
}
