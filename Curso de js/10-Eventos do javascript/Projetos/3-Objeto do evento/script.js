let bt1 = document.querySelector("#btn1");
let bt2 = document.querySelector("#btn2");

function msg(e){
    console.log(e);
}

bt1.addEventListener("Click", msg);

btn2.addEventListener("click", function(event){
    console.log(event);
});