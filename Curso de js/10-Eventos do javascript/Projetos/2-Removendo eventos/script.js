let bt1 = document.querySelector("#btn1");
let bt2 = document.querySelector("#btn2");

function msg(){
    console.log("Clicou em mim!");
}

bt1.addEventListener("Click", msg);

btn2.addEventListener("click", function(){
    bt1.removeEventListener("click", msg);
});