let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function(){
    console.log("Apertou o bot�o");
});

btn1.addEventListener("mouseup", function(){
    console.log("Soltou o bot�o");
});

btn2.addEventListener("dbclick", function(){
    console.log("Clicou duas vezes");
})

btn2.addEventListener("contextmenu", function(){
    e.preventDefault();
    console.log("Bot�o direito");
})